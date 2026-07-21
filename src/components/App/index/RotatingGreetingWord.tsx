'use client'

import {animate, AnimatePresence, motion, useMotionValue, useReducedMotion} from 'framer-motion'
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'

const WORDS = ['эйчар!', 'коллега!', 'заказчик!', 'Дмитрий!'] as const
const INTERVAL_MS = 2000
const FALLBACK_WORD = 'заказчик!'
const SHIMMER_DURATION = 3

export default function RotatingGreetingWord({variant = 'inline'}: {variant?: 'inline' | 'mobile-stage'}) {
  const shouldReduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState<number | null>(null)
  const measureRefs = useRef<Array<HTMLSpanElement | null>>([])
  const shimmerRef = useRef<HTMLSpanElement>(null)
  const shimmerPosition = useMotionValue(0)
  const shimmerAnimation = useRef<ReturnType<typeof animate> | null>(null)
  const currentWord = WORDS[index]
  const isMobileStage = variant === 'mobile-stage'
  const restingTransform = isMobileStage ? 'translate(-50%, -50%)' : 'translateY(-50%)'
  const enterTransform = isMobileStage ? 'translate(-50%, 0.18em)' : 'translateY(0.18em)'
  const exitTransform = isMobileStage ? 'translate(-50%, -1.18em)' : 'translateY(-1.18em)'

  const updateShimmer = useCallback(() => {
    if (!shimmerRef.current) return

    const wordWidth = shimmerRef.current.offsetWidth
    const startPos = wordWidth * -0.5
    const endPos = wordWidth * 1.25

    shimmerAnimation.current?.stop()
    shimmerPosition.set(startPos)
    shimmerAnimation.current = animate(shimmerPosition, endPos, {
      duration: SHIMMER_DURATION,
      ease: 'linear',
      repeat: Infinity,
    })
  }, [shimmerPosition])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length)
    }, INTERVAL_MS)

    return () => window.clearInterval(intervalId)
  }, [])

  useLayoutEffect(() => {
    const updateLayout = () => {
      const nextWidth = Math.max(...measureRefs.current.map((node) => node?.getBoundingClientRect().width ?? 0))
      if (nextWidth) {
        setWidth(Math.ceil(nextWidth))
      }

      updateShimmer()
    }

    updateLayout()
    document.fonts?.ready.then(updateLayout).catch(() => {})
    window.addEventListener('resize', updateLayout)

    return () => {
      window.removeEventListener('resize', updateLayout)
      shimmerAnimation.current?.stop()
    }
  }, [updateShimmer])

  return (
    <>
      <motion.span
        ref={shimmerRef}
        data-rotating-greeting
        className={isMobileStage
          ? 'relative flex h-[1.3em] w-full items-center justify-center overflow-hidden'
          : 'relative inline-flex h-[1.08em] max-w-full items-center overflow-hidden align-baseline'}
        style={!isMobileStage && width ? {width: `${width}px`} : undefined}
      >
        {!isMobileStage && (
          <span aria-hidden="true" className="invisible whitespace-nowrap">
            {FALLBACK_WORD}
          </span>
        )}

        <AnimatePresence initial={false} mode="sync">
          <motion.span
            key={currentWord}
            className={`absolute top-1/2 block whitespace-nowrap text-[#707070] ${isMobileStage ? 'left-1/2' : 'left-0'}`}
            initial={shouldReduceMotion ? {opacity: 0} : {opacity: 0, transform: enterTransform, filter: 'blur(3px)'}}
            animate={shouldReduceMotion ? {opacity: 1, transform: restingTransform} : {opacity: 1, transform: restingTransform, filter: 'blur(0px)'}}
            exit={shouldReduceMotion ? {opacity: 0} : {opacity: 0, transform: exitTransform, filter: 'blur(3px)'}}
            transition={{duration: shouldReduceMotion ? 0.18 : 0.32, ease: [0.23, 1, 0.32, 1]}}
          >
            {currentWord}
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 block bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #707070 0%, #CFCFCF 10%, #707070 20%)',
                backgroundSize: '200%',
                backgroundPositionX: shimmerPosition,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {currentWord}
            </motion.span>
          </motion.span>
        </AnimatePresence>
      </motion.span>

      <span aria-hidden="true" className="pointer-events-none fixed left-0 top-0 -z-10 overflow-hidden opacity-0 select-none">
        {WORDS.map((word, idx) => (
          <span
            key={word}
            ref={(node) => {
              measureRefs.current[idx] = node
            }}
            className="block whitespace-nowrap"
          >
            {word}
          </span>
        ))}
      </span>
    </>
  )
}
