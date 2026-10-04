'use client'

import {HEADER_DATA} from '@/lib/constants'
import {cn} from '@/lib/utils'
import {AnimatePresence, motion} from 'framer-motion'
import {Menu, Send, X} from 'lucide-react'
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
        className="relative z-[150] mx-auto flex h-14 w-full max-w-[64rem] items-center rounded-full border border-white/80 bg-[#f2f2ed]/78 px-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(70,70,65,0.08),0_1rem_3rem_rgba(36,36,34,0.16)] backdrop-blur-[30px] backdrop-saturate-150 mob:h-12 mob:px-1.5"
        initial={{opacity: 0, y: -12}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 rounded-full px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.055em] text-black/78 transition-colors duration-200 hover:bg-white/70 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mob:px-3 mob:text-[0.66rem]"
        >
          Артём Темнов
        </Link>

        <nav aria-label="Основная навигация" className="flex flex-1 items-center justify-center gap-9 px-6 mob:hidden">
          {HEADER_DATA.LINKS.map((link) => (
            <Link
              href={link.to}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="whitespace-nowrap text-[0.68rem] font-medium uppercase tracking-[0.045em] text-black/54 transition-colors duration-200 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              key={link.to}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://t.me/absolutnoretro"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать Артёму в Telegram"
          className="ml-auto flex shrink-0 items-center gap-2 rounded-full bg-black px-4 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.045em] text-white transition-[background-color,transform] duration-200 hover:bg-black/75 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mob:hidden"
        >
          Написать
          <Send className="size-3.5" strokeWidth={1.6} />
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          className="ml-auto hidden size-9 place-items-center rounded-full bg-black text-white transition-transform duration-200 active:scale-[0.96] mob:grid"
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
