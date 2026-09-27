'use client'

import {ITEMS, SOCIALS, type SocialsItem} from '@/app/archive/storage'
import {cn} from '@/lib/utils'
import {ArrowUpRight, Send} from 'lucide-react'
import {AnimatePresence, motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {FormEvent, useState} from 'react'

const featuredCases = ['case-2', 'case-1', 'case-3', 'case-4']
  .map((slug) => ITEMS.find((item) => item.slug === slug))
  .filter((item): item is SocialsItem => Boolean(item))

const tearOffNumbers = ['01', '02', '03', '04', '05', '06']
const tearOffRotation = [-0.8, 0.6, -0.5, 0.8, -0.6, 0.5]
const tearOffFlight = [
  {x: -82, y: -128, rotate: -32},
  {x: -58, y: -152, rotate: -24},
  {x: -30, y: -138, rotate: -17},
  {x: 32, y: -148, rotate: 18},
  {x: 60, y: -132, rotate: 25},
  {x: 84, y: -156, rotate: 34},
]

function TearOffContact() {
  const [removedNumbers, setRemovedNumbers] = useState<string[]>([])

  return (
    <motion.aside
      className="absolute left-[clamp(2rem,8vw,9rem)] top-[calc(38%_-_100px)] z-30 w-[12.5rem] text-[#171715] mob:hidden"
      initial={{opacity: 0, x: -20}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1]}}
    >
      <div className="origin-top-left scale-[0.85]">
      <div className="group relative bg-[#efeee8] px-4 pb-0 pt-4 shadow-[0_1.1rem_2.6rem_rgba(40,40,37,0.2),0_0.15rem_0.35rem_rgba(40,40,37,0.12)]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(30,30,28,0.42)_0.45px,transparent_0.45px)] [background-size:4px_4px]" />
        <div className="relative min-h-[7.6rem] border-b border-black/70">
          <p className="max-w-[9ch] text-[1.72rem] font-semibold leading-[0.92] tracking-[-0.065em]">Устроюсь дизайнером. Дорого</p>
          <span className="absolute bottom-2 right-0 font-mono text-[0.56rem] uppercase tracking-[0.08em] text-black/40">на связи</span>
        </div>

        <div className="relative grid grid-cols-6 gap-[3px] px-[2px]">
          <motion.p
            aria-hidden="true"
            animate={{opacity: removedNumbers.length > 0 ? 1 : 0}}
            transition={{duration: 0.6, delay: removedNumbers.length > 0 ? 0.24 : 0}}
            className="pointer-events-none absolute inset-0 flex items-center justify-center whitespace-nowrap text-sm font-medium tracking-[-0.02em]"
          >
            ну пожалуйста
          </motion.p>
          {tearOffNumbers.map((number, index) => {
            return (
              <div key={number} className="relative -mt-px h-[3.9rem]">
                <AnimatePresence initial={false}>
                  {!removedNumbers.includes(number) ? (
                    <motion.button
                      key={number}
                      type="button"
                      aria-label={`Оторвать телефон, листок ${index + 1}`}
                      onClick={() => setRemovedNumbers((current) => [...current, number])}
                      whileHover={{
                        y: 5,
                        rotate: tearOffRotation[index],
                        scale: 1.018,
                        filter: 'brightness(1.02)',
                        boxShadow: '0 0.55rem 0.8rem rgba(40,40,37,0.2)',
                      }}
                      whileTap={{y: 10, rotate: tearOffRotation[index] * 0.35, scale: 0.985}}
                      exit={{
                        x: [0, tearOffFlight[index].x * 0.12, tearOffFlight[index].x],
                        y: [5, 16, tearOffFlight[index].y],
                        rotate: [tearOffRotation[index], tearOffRotation[index] * 4, tearOffFlight[index].rotate],
                        scale: [1.018, 0.98, 0.72],
                        opacity: [1, 1, 0],
                        filter: ['brightness(1.02) blur(0px)', 'brightness(1.02) blur(0px)', 'brightness(1.02) blur(4px)'],
                        transition: {duration: 1.35, times: [0, 0.2, 1], ease: [0.4, 0, 0.2, 1]},
                      }}
                      transition={{type: 'spring', stiffness: 95, damping: 19, mass: 0.9}}
                      className="absolute inset-0 origin-top cursor-grab overflow-hidden border-x border-b border-black/12 bg-[#efeee8] shadow-[0_0.2rem_0.35rem_rgba(40,40,37,0.1)] outline-none focus-visible:z-10 focus-visible:ring-1 focus-visible:ring-black/45 active:z-10 active:cursor-grabbing hover:z-10"
                    >
                      <span aria-hidden="true" className="absolute inset-x-1 top-0 z-10 border-t border-dashed border-black/28" />
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(30,30,28,0.5)_0.4px,transparent_0.4px)] [background-size:4px_4px]" />
                      <span className="relative flex h-full items-center justify-center font-mono text-[0.5rem] tracking-[0.035em] [writing-mode:vertical-rl]">+79533150751</span>
                    </motion.button>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </motion.aside>
  )
}

function PhotoGalleryWidget() {
  return (
    <motion.figure
      className="group absolute right-[clamp(2rem,8vw,9rem)] top-[56%] z-20 w-[9.5rem] text-center mob:hidden"
      initial={{opacity: 0, y: 18, scale: 0.96}}
      animate={{opacity: 1, y: 0, scale: 1}}
      transition={{duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1]}}
      whileHover={{y: -5, scale: 1.018}}
    >
      <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/65 bg-white/30 p-[0.28rem] shadow-[0_1.25rem_2.8rem_rgba(50,50,47,0.24),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl">
        <div className="relative size-full overflow-hidden rounded-[1.72rem] bg-[#111]">
          <Image
            src="/about/artem-front-portrait.png"
            alt="Портрет Артёма Темнова"
            fill
            sizes="9.5rem"
            className="object-cover object-[center_30%] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),transparent_38%,rgba(0,0,0,0.08))]" />
        </div>
      </div>
      <figcaption className="mt-2.5 text-sm font-medium tracking-[-0.025em] text-black/72">Фото</figcaption>
    </motion.figure>
  )
}

function ProjectSection({item, index}: {item: SocialsItem; index: number}) {
  const href = item.link ?? `/archive#${item.slug}`

  return (
    <section id={`project-${index + 1}`} className="group relative min-h-[100dvh] overflow-hidden bg-[#111]">
      {item.image ? (
        <motion.div
          className="absolute inset-0"
          initial={{scale: 1.04}}
          whileInView={{scale: 1}}
          viewport={{once: false, amount: 0.35}}
          transition={{duration: 1.2, ease: [0.16, 1, 0.3, 1]}}
        >
          <Image
            src={item.image}
            alt={item.title ?? 'Обложка проекта'}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
          />
        </motion.div>
      ) : null}

      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,transparent_38%,rgba(0,0,0,0.34)_100%)]" />

      <motion.article
        className="absolute bottom-[8.5rem] left-1/2 z-10 w-[min(34rem,calc(100%_-_2rem))] -translate-x-1/2 rounded-[1.5rem] border border-white/55 bg-white/72 p-5 text-[#171715] shadow-[0_1.5rem_4rem_rgba(18,18,17,0.28),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-2xl mob:bottom-[7.5rem] mob:p-4"
        initial={{opacity: 0, y: 42}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: false, amount: 0.35}}
        transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-black/45">{SOCIALS[item.source]}</span>
            <h2 className="mt-2 text-[clamp(1.75rem,2.4vw,2.35rem)] font-semibold leading-[0.98] tracking-[-0.055em]">{item.title}</h2>
          </div>
          <span className="font-mono text-xs text-black/38">0{index + 1}</span>
        </div>

        <p className="mt-4 max-w-[48ch] text-sm leading-[1.45] text-black/58 mob:line-clamp-2">{item.content[0]}</p>

        <Link
          href={href}
          className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-[0.85rem] bg-black text-sm font-medium text-white transition-[transform,background-color] duration-300 hover:bg-black/82 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white/60"
        >
          Открыть кейс <ArrowUpRight className="size-4" strokeWidth={1.6} />
        </Link>
      </motion.article>
    </section>
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
  return (
    <main className="relative w-full max-w-[100vw] overflow-hidden bg-[#b8b8b3] text-[#181817]">
      <StageBackdrop fixed />

      <section id="home-intro" className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 pb-32 pt-24 mob:min-h-[100dvh] mob:items-start mob:px-4 mob:pb-36 mob:pt-32">
        <TearOffContact />
        <PhotoGalleryWidget />

        <motion.div
          className="relative z-20 mx-auto w-full max-w-[42rem] text-left"
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.75, ease: [0.22, 1, 0.36, 1]}}
        >
          <h1 className="text-[1.25rem] font-semibold leading-[1.15] tracking-[-0.035em] text-black/86 mob:text-xl">Артём Темнов</h1>
          <p className="mt-7 text-[1.25rem] font-semibold leading-[1.15] tracking-[-0.035em] text-black/82 mob:mt-6 mob:text-xl">Продуктовый дизайнер</p>

          <div className="mt-6 max-w-[42rem] space-y-4 text-[1.05rem] leading-[1.45] tracking-[-0.022em] text-black/48 mob:mt-5 mob:text-base">
            <p>Проектирую цифровые продукты: исследую задачу, формирую структуру и сценарии, работаю с интерфейсом, айдентикой и прототипом.</p>
            <p>Собираю интерактивные веб-прототипы и использую код как часть дизайн-процесса.</p>
          </div>
        </motion.div>

      </section>

      <div aria-label="Избранные проекты">
        {featuredCases.map((item, index) => (
          <ProjectSection item={item} index={index} key={item.slug} />
        ))}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 box-border max-w-[100vw] px-6 pb-6 lap:px-8 mob:px-3 mob:pb-3 max-[500px]:w-[100vw] max-[500px]:px-3">
        <ContactComposer />
      </div>
    </main>
  )
}
