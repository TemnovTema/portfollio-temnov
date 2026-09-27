'use client'

import {HEADER_DATA} from '@/lib/constants'
import {HEADER_BOX} from '~/Global/Container'
import {MOB_SCREEN_HEIGHT} from '~~/index/Hero'
import {Grid2X2, Menu, Send, X} from 'lucide-react'

import {useState, useLayoutEffect} from 'react'
import {motion, AnimatePresence, useScroll, useTransform} from 'framer-motion'
import {useMediaQuery} from '@/hooks/use-media-query'
import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'
import {HeaderLink} from '~/UI/HeaderLink'
import Button, {BUTTON_SIZES, BUTTON_VARIANTS} from '~/UI/Button'

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isStagePage = isHome || pathname === '/archive' || pathname === '/about'
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const {scrollY} = useScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const shadowOpacity = useTransform(scrollY, [0, 250], ['0', '0.1'])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  useLayoutEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={cn('fixed inset-x-0 z-[999] box-border max-w-[100vw] pt-6 lap:pt-4 mob:pt-2 max-[500px]:w-[100vw] max-[500px]:px-2', HEADER_BOX)}>
      {isStagePage ? (
        <motion.div
          className="relative z-[150] mx-auto flex h-11 w-full max-w-[42rem] items-center rounded-full border border-white/38 bg-black/[0.1] px-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.34),inset_0_-1px_0_rgba(255,255,255,0.08),0_1.1rem_3rem_rgba(36,36,34,0.14)] backdrop-blur-[28px] backdrop-saturate-150 mob:hidden"
          initial={{opacity: 0, y: -12}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
        >
          <Link
            href="/archive"
            aria-label="Открыть архив"
            className="grid size-8 shrink-0 place-items-center rounded-full border border-white/28 bg-white/13 text-white/68 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] transition-[background-color,transform] duration-200 hover:rotate-6 hover:bg-white/24 hover:text-white active:scale-[0.96]"
          >
            <Grid2X2 className="size-3.5" strokeWidth={1.5} />
          </Link>

          <nav aria-label="Основная навигация" className="flex flex-1 items-center justify-center gap-9 px-6">
            {HEADER_DATA.LINKS.map((link) => (
              <Link
                href={link.to}
                target={link.external ? '_blank' : '_self'}
                className="whitespace-nowrap text-[0.68rem] font-medium uppercase tracking-[0.045em] text-white/62 transition-colors hover:text-white"
                key={link.to}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <Link
              href="/about"
              aria-label="Обо мне"
              className="relative size-8 shrink-0 overflow-hidden rounded-full border border-white/38 bg-black/28 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform duration-200 hover:scale-[1.06] active:scale-[0.97]"
            >
              <Image src="/about/artem-studio-front-v5.png" alt="Артём Темнов" fill sizes="32px" className="object-cover object-[50%_22%]" />
            </Link>
            <Link
              href="https://t.me/absolutnoretro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Telegram"
              className="grid size-8 shrink-0 place-items-center rounded-full border border-white/40 bg-[radial-gradient(circle_at_35%_28%,rgba(194,221,255,0.9),rgba(78,126,188,0.68)_54%,rgba(34,55,88,0.78))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.44)] transition-[transform,filter] duration-200 hover:rotate-12 hover:brightness-110 active:scale-[0.96]"
            >
              <Send className="size-3.5" strokeWidth={1.6} />
            </Link>
          </div>
        </motion.div>
      ) : null}

      <motion.div
        className={cn(
          'relative z-[150]',
          'grid w-full max-w-full grid-cols-5 items-center rounded-2xl border p-2 mob:flex mob:justify-between mob:p-1.5',
          isStagePage
            ? 'hidden border-white/35 bg-black/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_1rem_3rem_rgba(41,41,38,0.14)] backdrop-blur-[24px] backdrop-saturate-150 mob:flex'
            : 'border-gray-medium/70 bg-black',
        )}
        style={{
          boxShadow: useTransform(shadowOpacity, (opacity) => `0px 0px 22px rgba(204, 204, 204, ${opacity})`),
        }}
      >
        <Link href="/" className="group w-fit flex gap-2 items-center pl-1.5" onClick={() => !isDesktop && isMenuOpen && setIsMenuOpen(false)}>
          <div className="size-8 mob:size-6 bg-white rounded-full group-hover:scale-[1.05] group-hover:bg-gray duration-300"></div>
          <span className="text-[27px] mob:text-2xl tracking-tight">Portfolio</span>
        </Link>

        <nav className={cn('col-span-3', 'flex gap-6 justify-self-center', 'mob:hidden')}>
          {HEADER_DATA.LINKS.map((link) => (
            <HeaderLink variant="desktop" href={link.to} label={link.label} external={link.external} key={link.to} />
          ))}
        </nav>

        <div className={cn('justify-self-end', 'flex justify-between gap-[7px]')}>
          <Button to="https://t.me/absolutnoretro" target="_blank" variant="solid" size="small" text="Связаться" onClick={() => !isDesktop && isMenuOpen && setIsMenuOpen(false)} className={cn('mob:hidden', isHome && '!border-white/35 !bg-white/28 !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-xl hover:!bg-white/38')} />

          {!isDesktop && (
            <button className={cn([BUTTON_VARIANTS.DEFAULT, BUTTON_VARIANTS.outline], BUTTON_SIZES.small, 'hidden mob:block mob:py-2 mob:px-2.5 border-white-dirty/40 text-white-dirty/90')} onClick={toggleMenu}>
              <motion.span key={isMenuOpen ? 'close' : 'menu'} initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.8}} transition={{duration: 0.2, ease: 'easeInOut'}}>
                {isMenuOpen ? <X /> : <Menu />}
              </motion.span>
            </button>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className={cn(MOB_SCREEN_HEIGHT, 'fixed z-[100] inset-0 pt-10 px-2.5', 'flex flex-col items-center justify-center gap-2', 'bg-black bg-opacity-90')} initial={{opacity: 0, y: '-100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-100%'}} transition={{duration: 0.5, ease: 'easeInOut'}}>
            <nav className="w-full flex flex-col gap-2 items-center">
              {[...HEADER_DATA.LINKS, ...HEADER_DATA.MOBILE_LINKS].map((link, index) => (
                <motion.div
                  className="w-full"
                  initial={{opacity: 0, y: 30}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 30}}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.4 + index * 0.1,
                  }}
                  key={link.to}
                >
                  <HeaderLink variant="mobile" href={link.to} label={link.label} external={link.external} onClick={toggleMenu} />
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
