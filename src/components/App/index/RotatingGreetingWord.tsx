'use client'

import {AnimatePresence, motion, useAnimationControls, useReducedMotion} from 'framer-motion'
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'

const WORDS = ['эйчар!', 'коллега!', 'заказчик!', 'Дмитрий!'] as const
const INTERVAL_MS = 2000
const FALLBACK_WORD = 'заказчик!'
const SHIMMER_DURATION = 3

export default function RotatingGreetingWord() {
  const shouldReduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState<number | null>(null)
  const measureRefs = useRef<Array<HTMLSpanElement | null>>([])
  const shimmerRef = useRef<HTMLSpanElement>(null)
  const shimmerControls = useAnimationControls()
  const currentWord = WORDS[index]

  const updateShimmer = useCallback(() => {
    if (!shimmerRef.current) return

    const wordWidth = shimmerRef.current.offsetWidth
    const startPos = wordWidth * -0.5
    const endPos = wordWidth * 1.25

    shimmerControls.start({
      backgroundPosition: [`${startPos}px`, `${endPos}px`],
      transition: {
        duration: SHIMMER_DURATION,
        ease: 'linear',
        repeat: Infinity,
      },
    })
  }, [shimmerControls])

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
    }
  }, [updateShimmer])

  return (
    <>
      <motion.span
        ref={shimmerRef}
        data-rotating-greeting
        className="relative inline-flex h-[1.1em] items-center bg-clip-text align-baseline text-transparent"
        style={{
          ...(width ? {width: `${width}px`} : {}),
          backgroundImage: 'linear-gradient(to right, #707070 0%, #CFCFCF 10%, #707070 20%)',
          backgroundSize: '200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        animate={shimmerControls}
      >
        <span aria-hidden="true" className="invisible whitespace-nowrap">
          {FALLBACK_WORD}
        </span>

        <AnimatePresence initial={false} mode="sync">
          <motion.span
            key={currentWord}
            className="absolute left-0 top-1/2 block whitespace-nowrap"
            initial={shouldReduceMotion ? {opacity: 0} : {opacity: 0, transform: 'translateY(0.35em)', filter: 'blur(4px)'}}
            animate={shouldReduceMotion ? {opacity: 1, transform: 'translateY(-50%)'} : {opacity: 1, transform: 'translateY(-50%)', filter: 'blur(0px)'}}
            exit={shouldReduceMotion ? {opacity: 0} : {opacity: 0, transform: 'translateY(-1.35em)', filter: 'blur(4px)'}}
            transition={{duration: shouldReduceMotion ? 0.2 : 0.38, ease: [0.77, 0, 0.175, 1]}}
          >
            {currentWord}
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
