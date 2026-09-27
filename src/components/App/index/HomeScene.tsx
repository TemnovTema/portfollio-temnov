'use client'

import {ITEMS, SOCIALS, type SocialsItem} from '@/app/archive/storage'
import {cn} from '@/lib/utils'
import {ArrowLeft, ArrowRight, ArrowUpRight, Grid2X2, Send} from 'lucide-react'
import {motion, type MotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {FormEvent, useRef, useState} from 'react'

const featuredCases = ITEMS.slice(0, 4)

function ProjectTile({
  item,
  index,
  progress,
  isActive,
  onSelect,
}: {
  item: SocialsItem
  index: number
  progress: MotionValue<number>
  isActive: boolean
  onSelect: (index: number) => void
}) {
  const reduceMotion = useReducedMotion()
  const href = item.link ?? `/archive#${item.slug}`
  const relativePosition = useTransform(progress, (value) => index - value * (featuredCases.length - 1))
  const cardTransform = useTransform(relativePosition, (position) => {
    const distance = Math.abs(position)
    const direction = Math.sign(position)
    const translateX = direction * (distance * 37 + Math.max(0, distance - 1) * 7)
    const scale = Math.max(0.34, 1 - Math.min(distance, 1) * 0.52 - Math.max(0, distance - 1) * 0.14)
    const rotation = reduceMotion ? 0 : direction * Math.min(8, distance * 5)

    return `translate(calc(-50% + ${translateX}vw), -50%) scale(${scale}) rotate(${rotation}deg)`
  })
  const cardOpacity = useTransform(relativePosition, (position) => Math.max(0, 1 - Math.max(0, Math.abs(position) - 0.15) * 0.28))
  const cardZIndex = useTransform(relativePosition, (position) => 50 - Math.round(Math.abs(position) * 10))
  const detailOpacity = useTransform(relativePosition, (position) => Math.max(0, 1 - Math.abs(position) * 2.4))
  const detailTransform = useTransform(relativePosition, (position) => `translateY(${Math.min(12, Math.abs(position) * 18)}px)`)

  return (
    <motion.article
      className={cn(
        'group absolute left-1/2 top-[50%] w-[clamp(44rem,58vw,58rem)] text-white will-change-transform',
        'mob:relative mob:left-auto mob:right-auto mob:top-auto mob:z-auto mob:w-[78vw] mob:max-w-[20rem] mob:shrink-0 mob:!transform-none mob:!opacity-100',
      )}
      initial={false}
      style={{opacity: cardOpacity, transform: cardTransform, zIndex: cardZIndex}}
    >
      <motion.div
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 mob:hidden"
        style={{opacity: detailOpacity}}
        aria-hidden={!isActive}
      >
        <div className="max-w-[22rem] truncate rounded-full border border-white/35 bg-black/68 px-3 py-1 text-[0.65rem] font-medium text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-2xl">
          {item.title}
        </div>
      </motion.div>

      <Link href={href} className="block overflow-hidden rounded-[1.35rem] border border-white/45 bg-[#111] p-2 shadow-[0_2.4rem_5rem_rgba(30,30,28,0.34),0_0.25rem_0.8rem_rgba(30,30,28,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
        <div className="relative aspect-[2/1] overflow-hidden rounded-[1rem] bg-neutral-900 mob:aspect-[16/10]">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title ?? 'Обложка проекта'}
              fill
              priority={index === 0}
              sizes={index === 0 ? '(max-width: 500px) 78vw, 38vw' : '(max-width: 500px) 78vw, 22vw'}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
          <ArrowUpRight className="absolute right-3 top-3 size-8 rounded-full border border-white/25 bg-black/45 p-1.5 backdrop-blur-md transition-transform duration-300 group-hover:rotate-45" strokeWidth={1.5} />

          <motion.div
            className="absolute bottom-3 left-3 right-3 max-w-[29rem] rounded-[1rem] border border-white/25 bg-black/30 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl mob:hidden"
            style={{opacity: detailOpacity, transform: detailTransform}}
          >
            <p className="max-w-[48ch] text-xs leading-[1.4] text-white/82">{item.content[0]}</p>
            <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.06em] text-white/58">
              Открыть проект <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
            </span>
          </motion.div>
        </div>

        <div className="hidden items-end justify-between gap-4 px-2 pb-1 pt-3 mob:flex">
          <div className="space-y-1">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-white/45">{SOCIALS[item.source]}</span>
            <h2 className="max-w-[18ch] text-[clamp(1.15rem,1.45vw,1.55rem)] font-medium leading-[1.08] tracking-[-0.035em] text-white mob:text-lg">
              {item.title}
            </h2>
          </div>
          <span className="shrink-0 font-mono text-[0.68rem] text-white/45">0{index + 1}</span>
        </div>
      </Link>

      <motion.div
        className={cn('absolute bottom-4 right-4 z-30 flex items-center gap-1 mob:hidden', isActive ? 'pointer-events-auto' : 'pointer-events-none')}
        style={{opacity: detailOpacity, transform: detailTransform}}
        aria-hidden={!isActive}
      >
        <button
          type="button"
          onClick={() => onSelect(Math.max(0, index - 1))}
          disabled={!isActive || index === 0}
          className="flex items-center gap-1.5 rounded-full border border-white/25 bg-black/42 px-2.5 py-1.5 text-[0.58rem] font-medium uppercase tracking-[0.045em] text-white/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl transition-[background-color,transform,opacity] duration-200 hover:bg-black/65 hover:text-white active:scale-[0.97] disabled:opacity-30"
        >
          <ArrowLeft className="size-3" strokeWidth={1.5} /> Назад
        </button>
        <Link
          href="/archive"
          aria-label="Открыть архив"
          tabIndex={isActive ? 0 : -1}
          className="grid size-8 place-items-center rounded-full border border-white/28 bg-black/48 text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl transition-[background-color,transform] duration-200 hover:bg-black/70 hover:text-white active:scale-[0.96]"
        >
          <Grid2X2 className="size-3.5" strokeWidth={1.5} />
        </Link>
        <button
          type="button"
          onClick={() => onSelect(Math.min(featuredCases.length - 1, index + 1))}
          disabled={!isActive || index === featuredCases.length - 1}
          className="flex items-center gap-1.5 rounded-full border border-white/25 bg-black/42 px-2.5 py-1.5 text-[0.58rem] font-medium uppercase tracking-[0.045em] text-white/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl transition-[background-color,transform,opacity] duration-200 hover:bg-black/65 hover:text-white active:scale-[0.97] disabled:opacity-30"
        >
          Дальше <ArrowRight className="size-3" strokeWidth={1.5} />
        </button>
      </motion.div>
    </motion.article>
  )
}

export function ContactComposer() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const cleanMessage = message.trim()

    if (!cleanMessage) {
      setError('Напишите пару слов о задаче')
      return
    }

    setError('')
    const subject = encodeURIComponent('Сообщение с портфолио')
    const body = encodeURIComponent(cleanMessage)
    window.location.href = `mailto:treywas2001@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form
      onSubmit={submitMessage}
      className="relative isolate mx-auto w-full max-w-[42rem] overflow-hidden rounded-[1.6rem] border border-white/45 bg-white/16 p-2 text-[#181817] shadow-[inset_0_1px_0_rgba(255,255,255,0.62),inset_0_-1px_0_rgba(255,255,255,0.14),0_1.8rem_5rem_rgba(45,45,42,0.2)] backdrop-blur-[28px] backdrop-saturate-[1.35] mob:rounded-[1.5rem]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.58),transparent_38%),linear-gradient(105deg,rgba(255,255,255,0.2),transparent_46%,rgba(255,255,255,0.12))]" />
      <div className="flex items-center gap-1.5 px-0.5 pb-0.5 mob:overflow-x-auto">
        <span className="whitespace-nowrap rounded-full border border-white/45 bg-white/42 px-3 py-1.5 text-sm font-medium text-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">Написать мне</span>
        <Link
          href="https://t.me/absolutnoretro"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-full border border-white/25 bg-black/[0.06] px-3 py-1.5 text-sm font-medium text-black/62 transition-colors hover:bg-white/30 hover:text-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/55"
        >
          Telegram
        </Link>
      </div>

      <div className="flex items-center gap-2.5 pl-2.5 mob:gap-2 mob:pl-2">
        <label htmlFor="portfolio-message" className="sr-only">Сообщение Артему</label>
        <input
          id="portfolio-message"
          name="message"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value)
            if (error) setError('')
          }}
          placeholder="Расскажите о задаче..."
          aria-describedby={error ? 'portfolio-message-error' : undefined}
          aria-invalid={Boolean(error)}
          className="min-w-0 flex-1 bg-transparent py-2.5 text-lg tracking-[-0.025em] text-black/82 outline-none placeholder:text-black/35 mob:py-3 mob:text-base"
        />
        <button
          type="submit"
          aria-label="Отправить сообщение"
          className="grid size-12 shrink-0 place-items-center rounded-full border border-white/35 bg-black/78 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform duration-200 hover:rotate-45 hover:bg-black/88 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/55 focus-visible:ring-offset-2 focus-visible:ring-offset-white/20 mob:size-11"
        >
          <Send className="size-5" strokeWidth={1.7} />
        </button>
      </div>

      {error ? <p id="portfolio-message-error" className="px-3 pb-1 font-mono text-xs text-[#7a2721]">{error}</p> : null}
    </form>
  )
}

export function StageBackdrop({fixed = false}: {fixed?: boolean}) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none inset-0 overflow-hidden', fixed ? 'fixed' : 'absolute')}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(255,255,255,0.98)_0%,rgba(245,245,241,0.72)_22%,rgba(202,202,197,0.72)_52%,rgba(151,151,146,0.9)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[39%] bg-[linear-gradient(180deg,rgba(170,170,165,0)_0%,rgba(126,126,121,0.36)_44%,rgba(104,104,99,0.62)_100%)]" />
      <div className="absolute left-1/2 top-[18%] h-[52%] w-[62%] -translate-x-1/2 rounded-full bg-white/24 blur-[5rem] mob:top-[22%] mob:h-[38%] mob:w-[120%]" />
    </div>
  )
}

export default function HomeScene() {
  const sceneRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const {scrollYProgress} = useScroll({target: sceneRef, offset: ['start start', 'end end']})
  const smoothProgress = useSpring(scrollYProgress, {stiffness: 82, damping: 26, mass: 0.42, restDelta: 0.0005})

  useMotionValueEvent(smoothProgress, 'change', (value) => {
    const nextIndex = Math.min(featuredCases.length - 1, Math.max(0, Math.round(value * (featuredCases.length - 1))))
    setActiveIndex((currentIndex) => currentIndex === nextIndex ? currentIndex : nextIndex)
  })

  const selectProject = (index: number) => {
    if (!sceneRef.current) return
    const sceneTop = sceneRef.current.getBoundingClientRect().top + window.scrollY
    const scrollRange = sceneRef.current.offsetHeight - window.innerHeight
    window.scrollTo({top: sceneTop + (index / (featuredCases.length - 1)) * scrollRange, behavior: 'smooth'})
  }

  return (
    <main ref={sceneRef} className="relative h-[340dvh] w-full max-w-[100vw] bg-[#b8b8b3] text-[#181817] mob:h-[100dvh]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <StageBackdrop />

        <section id="featured-cases" aria-label="Избранные проекты" className="absolute inset-0 z-20 mob:inset-x-0 mob:bottom-[9.8rem] mob:top-[7rem] mob:flex mob:snap-x mob:snap-mandatory mob:items-center mob:overflow-x-auto mob:px-4 mob:pb-4 mob:[scrollbar-width:none]">
          <div className="contents mob:flex mob:w-max mob:gap-3 mob:pr-4 mob:[&>*]:snap-center">
            {featuredCases.map((item, index) => (
              <ProjectTile item={item} index={index} progress={smoothProgress} isActive={activeIndex === index} onSelect={selectProject} key={item.slug} />
            ))}
          </div>
        </section>

        <div className="absolute inset-x-0 bottom-0 z-50 box-border max-w-[100vw] px-6 pb-6 lap:px-8 mob:px-3 mob:pb-3 max-[500px]:w-[100vw] max-[500px]:px-3">
          <ContactComposer />
        </div>
      </div>
    </main>
  )
}
