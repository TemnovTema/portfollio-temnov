'use client'

import {HEADER_DATA} from '@/lib/constants'
import {cn} from '@/lib/utils'
import {AnimatePresence, motion} from 'framer-motion'
import {Menu, Send, X} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {useLayoutEffect, useState} from 'react'

import {HEADER_BOX} from '~/Global/Container'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useLayoutEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={cn('fixed inset-x-0 z-[999] box-border max-w-[100vw] pt-6 lap:pt-4 mob:pt-2', HEADER_BOX)}>
      <motion.div
        className="relative isolate z-[150] mx-auto flex h-14 w-full max-w-[42rem] items-center overflow-hidden rounded-[1.6rem] border border-white/45 bg-white/16 px-2 text-[#181817] shadow-[inset_0_1px_0_rgba(255,255,255,0.62),inset_0_-1px_0_rgba(255,255,255,0.14),0_1.8rem_5rem_rgba(45,45,42,0.2)] backdrop-blur-[28px] backdrop-saturate-[1.35] mob:h-12 mob:rounded-[1.5rem] mob:px-1.5"
        initial={{opacity: 0, y: -12}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.58),transparent_38%),linear-gradient(105deg,rgba(255,255,255,0.2),transparent_46%,rgba(255,255,255,0.12))]" />
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="На главную"
          className="size-9 shrink-0 rounded-full border border-white/35 bg-black/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform duration-200 hover:scale-[1.06] active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mob:size-8"
        />

        <nav aria-label="Основная навигация" className="flex flex-1 items-center justify-center gap-7 px-4 mob:hidden">
          {HEADER_DATA.LINKS.map((link) => (
            <Link
              href={link.to}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="whitespace-nowrap text-[0.68rem] font-medium uppercase tracking-[0.045em] text-black/62 transition-colors duration-200 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              key={link.to}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5">
          <Link
            href="/about"
            aria-label="Обо мне"
            className="relative size-9 overflow-hidden rounded-full border border-white/45 bg-black/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-transform duration-200 hover:scale-[1.06] active:scale-[0.96] mob:size-8"
          >
            <Image src="/about/artem-studio-front-v5.png" alt="" fill sizes="36px" className="object-cover object-[50%_22%]" />
          </Link>
          <Link
            href="https://t.me/absolutnoretro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть Telegram"
            className="grid size-10 place-items-center rounded-full border border-white/35 bg-black/78 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform duration-200 hover:rotate-45 hover:bg-black/88 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mob:hidden"
          >
            <Send className="size-4" strokeWidth={1.7} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          className="ml-1.5 hidden size-9 place-items-center rounded-full border border-white/35 bg-black/78 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform duration-200 active:scale-[0.96] mob:grid"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col justify-end bg-[#e7e7e2]/96 px-2.5 pb-3 pt-20 backdrop-blur-2xl"
            initial={{opacity: 0, y: '-3%'}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '-3%'}}
            transition={{duration: 0.32, ease: [0.22, 1, 0.36, 1]}}
          >
            <nav className="grid gap-2">
              {[...HEADER_DATA.LINKS, ...HEADER_DATA.MOBILE_LINKS].map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  target={link.external ? '_blank' : '_self'}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={closeMenu}
                  className="rounded-2xl border border-black/10 bg-white/35 px-5 py-5 text-2xl font-medium tracking-[-0.035em] text-black/85 transition-colors active:bg-white/70"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://t.me/absolutnoretro"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-between rounded-2xl bg-black px-5 py-5 text-2xl font-medium tracking-[-0.035em] text-white"
              >
                Написать в Telegram
                <Send className="size-5" strokeWidth={1.5} />
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
