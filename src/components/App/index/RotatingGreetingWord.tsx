'use client'

import {motion, useAnimationControls, useAnimationFrame, useMotionValue, useReducedMotion} from 'framer-motion'
import {useEffect, useLayoutEffect, useRef, useState} from 'react'

const WORDS = ['эйчар!', 'коллега!', 'заказчик!', 'Дмитрий!'] as const
const INTERVAL_MS = 2000
const FALLBACK_WORD = 'заказчик!'
const SHIMMER_DURATION_MS = 3000
const SHIMMER_START = -120
const SHIMMER_DISTANCE = 240

export default function RotatingGreetingWord({variant = 'inline'}: {variant?: 'inline' | 'mobile-stage'}) {
  const shouldReduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState<number | null>(null)
  const measureRefs = useRef<Array<HTMLSpanElement | null>>([])
  const wordControls = useAnimationControls()
  const shimmerPosition = useMotionValue(`${SHIMMER_START}%`)
  const currentWord = WORDS[index]
  const isMobileStage = variant === 'mobile-stage'

  useAnimationFrame((time) => {
    if (shouldReduceMotion) return

    const phase = (time % SHIMMER_DURATION_MS) / SHIMMER_DURATION_MS
    shimmerPosition.set(`${SHIMMER_START + phase * SHIMMER_DISTANCE}%`)
  })

  useEffect(() => {
    if (shouldReduceMotion) return

    let isCancelled = false
    let timeoutId: number

    const rotateWord = async () => {
      await wordControls.start({
        opacity: 0,
        y: '-118%',
        filter: 'blur(3px)',
        transition: {duration: 0.26, ease: [0.55, 0, 1, 0.45]},
      })

      if (isCancelled) return

      setIndex((prev) => (prev + 1) % WORDS.length)
      wordControls.set({opacity: 0, y: '18%', filter: 'blur(3px)'})

      await wordControls.start({
        opacity: 1,
        y: '-50%',
        filter: 'blur(0px)',
        transition: {duration: 0.34, ease: [0.23, 1, 0.32, 1]},
      })

      if (!isCancelled) {
        timeoutId = window.setTimeout(rotateWord, INTERVAL_MS)
      }
    }

    timeoutId = window.setTimeout(rotateWord, INTERVAL_MS)

    return () => {
      isCancelled = true
      window.clearTimeout(timeoutId)
      wordControls.stop()
    }
  }, [shouldReduceMotion, wordControls])

  useLayoutEffect(() => {
    const updateLayout = () => {
      const nextWidth = Math.max(...measureRefs.current.map((node) => node?.getBoundingClientRect().width ?? 0))
      if (nextWidth) {
        setWidth(Math.ceil(nextWidth))
      }
    }

    updateLayout()
    document.fonts?.ready.then(updateLayout).catch(() => {})
    window.addEventListener('resize', updateLayout)

    return () => {
      window.removeEventListener('resize', updateLayout)
    }
  }, [])

  return (
    <>
      <motion.span
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

        <motion.span
          className={`absolute top-1/2 block whitespace-nowrap ${isMobileStage ? 'left-1/2' : 'left-0'}`}
          initial={{opacity: 1, x: isMobileStage ? '-50%' : '0%', y: '-50%', filter: 'blur(0px)'}}
          animate={wordControls}
        >
          <motion.span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #707070 0%, #707070 36%, #cfcfcf 50%, #707070 64%, #707070 100%)',
              backgroundSize: '220% 100%',
              backgroundPositionX: shimmerPosition,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {currentWord}
          </motion.span>
        </motion.span>
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
