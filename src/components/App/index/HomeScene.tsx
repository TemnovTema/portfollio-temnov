'use client'

import {ITEMS, SOCIALS, type SocialsItem} from '@/app/archive/storage'
import {cn} from '@/lib/utils'
import {ArrowUpRight, Send} from 'lucide-react'
import {motion, useReducedMotion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {FormEvent, useState} from 'react'

const featuredCases = ITEMS.slice(0, 4)

const DESKTOP_POSITIONS = [
  'left-1/2 top-[29%] z-40 w-[clamp(25rem,38vw,35rem)] -translate-x-1/2 rotate-[-1deg]',
  'left-[7%] top-[27%] z-20 w-[clamp(15rem,20vw,19rem)] rotate-[-6deg]',
  'right-[6%] top-[30%] z-30 w-[clamp(16rem,22vw,21rem)] rotate-[5deg]',
  'left-[20%] top-[15%] z-10 w-[clamp(16rem,22vw,21rem)] rotate-[2deg]',
] as const

function ProjectTile({item, index}: {item: SocialsItem; index: number}) {
  const reduceMotion = useReducedMotion()
  const href = item.link ?? `/archive#${item.slug}`

  return (
    <motion.article
      className={cn(
        'group absolute overflow-hidden rounded-[1.35rem] border border-white/45 bg-[#111] p-2 text-white',
        'shadow-[0_2.4rem_5rem_rgba(30,30,28,0.34),0_0.25rem_0.8rem_rgba(30,30,28,0.16)]',
        'mob:relative mob:left-auto mob:right-auto mob:top-auto mob:z-auto mob:w-[78vw] mob:max-w-[20rem] mob:shrink-0 mob:translate-x-0 mob:rotate-0',
        DESKTOP_POSITIONS[index],
      )}
      initial={reduceMotion ? false : {opacity: 0, y: 26, scale: 0.96}}
      animate={{opacity: 1, y: 0, scale: 1}}
      transition={{duration: 0.72, delay: 0.12 + index * 0.09, ease: [0.22, 1, 0.36, 1]}}
      whileHover={reduceMotion ? undefined : {y: -9, rotate: 0, scale: index === 0 ? 1.015 : 1.03}}
    >
      <Link href={href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] bg-neutral-900">
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
        </div>

        <div className="flex items-end justify-between gap-4 px-2 pb-1 pt-3">
          <div className="space-y-1">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-white/45">{SOCIALS[item.source]}</span>
            <h2 className="max-w-[18ch] text-[clamp(1.15rem,1.45vw,1.55rem)] font-medium leading-[1.08] tracking-[-0.035em] text-white mob:text-lg">
              {item.title}
            </h2>
          </div>
          <span className="shrink-0 font-mono text-[0.68rem] text-white/45">0{index + 1}</span>
        </div>
      </Link>
    </motion.article>
  )
}

function ContactComposer() {
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
      className="relative mx-auto w-full max-w-[54rem] rounded-[2rem] border border-white/20 bg-[#111]/92 p-2.5 text-white shadow-[0_1.8rem_5rem_rgba(20,20,18,0.42)] backdrop-blur-2xl mob:rounded-[1.5rem] mob:p-2"
    >
      <div className="flex items-center gap-2 px-1 pb-1.5 mob:overflow-x-auto">
        <span className="whitespace-nowrap rounded-full bg-[#f0e1d7] px-4 py-2 font-medium text-black mob:px-3 mob:py-1.5 mob:text-sm">Написать мне</span>
        <Link
          href="https://t.me/absolutnoretro"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-full bg-white/8 px-4 py-2 font-medium text-white/85 transition-colors hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white mob:px-3 mob:py-1.5 mob:text-sm"
        >
          Telegram
        </Link>
      </div>

      <div className="flex items-center gap-3 pl-3 mob:gap-2 mob:pl-2">
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
          className="min-w-0 flex-1 bg-transparent py-4 text-xl tracking-[-0.025em] text-white outline-none placeholder:text-white/38 mob:py-3 mob:text-base"
        />
        <button
          type="submit"
          aria-label="Отправить сообщение"
          className="grid size-14 shrink-0 place-items-center rounded-full bg-[#f0e1d7] text-black transition-transform duration-200 hover:rotate-45 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] mob:size-11"
        >
          <Send className="size-5" strokeWidth={1.7} />
        </button>
      </div>

      {error ? <p id="portfolio-message-error" className="px-3 pb-1 font-mono text-xs text-[#f0b4ad]">{error}</p> : null}
    </form>
  )
}

export default function HomeScene() {
  return (
    <main className="relative min-h-[100dvh] w-full max-w-[100vw] overflow-hidden bg-[#b8b8b3] text-[#181817]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(255,255,255,0.98)_0%,rgba(245,245,241,0.72)_22%,rgba(202,202,197,0.72)_52%,rgba(151,151,146,0.9)_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[39%] bg-[linear-gradient(180deg,rgba(170,170,165,0)_0%,rgba(126,126,121,0.36)_44%,rgba(104,104,99,0.62)_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[-12%] bottom-[28%] h-px bg-black/10 shadow-[0_1.8rem_4rem_rgba(47,47,44,0.18)]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[18%] h-[52%] w-[62%] -translate-x-1/2 rounded-full bg-white/24 blur-[5rem] mob:top-[22%] mob:h-[38%] mob:w-[120%]" />

      <header className="absolute inset-x-0 top-0 z-10 box-border max-w-[100vw] px-[10rem] pt-[7.6rem] lap:px-8 mob:px-4 mob:pt-[6.4rem] max-[500px]:w-[100vw] max-[500px]:px-4">
        <div className="flex items-end justify-between gap-8 mob:items-start">
          <div>
            <h1 className="text-[clamp(2rem,3.2vw,3.6rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[#1d1d1b] mob:max-w-[9ch] mob:text-[2.4rem]">
              Выберите проект
            </h1>
            <p className="mt-2 max-w-[29rem] text-base leading-[1.4] text-black/55 mob:hidden">
              Продуктовый дизайн, исследования и цифровые эксперименты.
            </p>
          </div>
          <Link href="/archive" className="group flex shrink-0 items-center gap-2 text-sm font-medium text-black/65 transition-colors hover:text-black mob:absolute mob:right-4 mob:top-[6.65rem]">
            Весь архив
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" strokeWidth={1.5} />
          </Link>
        </div>
      </header>

      <section id="featured-cases" aria-label="Избранные проекты" className="absolute inset-0 z-20 mob:inset-x-0 mob:bottom-[11.8rem] mob:top-[11.5rem] mob:flex mob:snap-x mob:snap-mandatory mob:items-center mob:overflow-x-auto mob:px-4 mob:pb-4 mob:[scrollbar-width:none]">
        <div className="contents mob:flex mob:w-max mob:gap-3 mob:pr-4 mob:[&>*]:snap-center">
          {featuredCases.map((item, index) => <ProjectTile item={item} index={index} key={item.slug} />)}
        </div>
      </section>

      <div className="absolute inset-x-0 bottom-0 z-50 box-border max-w-[100vw] px-6 pb-6 lap:px-8 mob:px-3 mob:pb-3 max-[500px]:w-[100vw] max-[500px]:px-3">
        <ContactComposer />
      </div>
    </main>
  )
}
