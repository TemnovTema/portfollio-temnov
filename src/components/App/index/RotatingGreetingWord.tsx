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

  useEffect(() => {
    updateShimmer()
  }, [currentWord, updateShimmer])

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
      <span className="relative inline-flex h-[1.1em] items-center align-baseline" style={width ? {width: `${width}px`} : undefined}>
        <span aria-hidden="true" className="invisible whitespace-nowrap">
          {FALLBACK_WORD}
        </span>

        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={currentWord}
            className="absolute left-0 top-1/2 block whitespace-nowrap"
            initial={shouldReduceMotion ? {opacity: 0} : {opacity: 0, y: '0.35em', filter: 'blur(5px)'}}
            animate={shouldReduceMotion ? {opacity: 1, y: '-50%'} : {opacity: 1, y: '-50%', filter: 'blur(0px)'}}
            exit={shouldReduceMotion ? {opacity: 0} : {opacity: 0, y: '-85%', filter: 'blur(5px)'}}
            transition={{duration: 0.42, ease: [0.22, 1, 0.36, 1]}}
          >
            <span ref={shimmerRef} className="relative inline-block whitespace-nowrap text-[#8b8b8b]">
              {currentWord}

              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 whitespace-nowrap bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #707070 0%, #CFCFCF 10%, #707070 20%)',
                  backgroundSize: '200%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={shimmerControls}
              >
                {currentWord}
              </motion.span>
            </span>
          </motion.span>
        </AnimatePresence>
      </span>

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
