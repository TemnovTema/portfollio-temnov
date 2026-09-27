'use client'

import {HEADER_DATA} from '@/lib/constants'
import {HEADER_BOX} from '~/Global/Container'
import {MOB_SCREEN_HEIGHT} from '~~/index/Hero'
import {Menu, X} from 'lucide-react'

import {useState, useLayoutEffect} from 'react'
import {motion, AnimatePresence, useScroll, useTransform} from 'framer-motion'
import {useMediaQuery} from '@/hooks/use-media-query'
import {cn} from '@/lib/utils'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {HeaderLink} from '~/UI/HeaderLink'
import Button, {BUTTON_SIZES, BUTTON_VARIANTS} from '~/UI/Button'

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
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
      {isHome ? (
        <motion.div
          className="relative z-[150] mx-auto flex w-fit flex-col items-center gap-1.5 mob:hidden"
          initial={{opacity: 0, y: -12}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
        >
          <Link
            href="/"
            aria-label="На главную"
            className="flex h-7 w-[23rem] items-center justify-center gap-1.5 rounded-full border border-white/25 bg-black/[0.09] text-[0.68rem] font-medium tracking-[-0.01em] text-white/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-[22px] backdrop-saturate-150 transition-colors hover:bg-white/15 hover:text-white/85"
          >
            <span className="size-1.5 rounded-full bg-white/55" />
            Portfolio
          </Link>

          <nav aria-label="Основная навигация" className="flex items-center gap-1.5">
            {HEADER_DATA.LINKS.map((link) => (
              <Link
                href={link.to}
                target={link.external ? '_blank' : '_self'}
                className="rounded-full border border-white/25 bg-black/[0.1] px-4 py-2 text-xs font-medium uppercase tracking-[0.035em] text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[22px] backdrop-saturate-150 transition-colors hover:bg-white/18 hover:text-white"
                key={link.to}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://t.me/absolutnoretro"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 bg-white/22 px-4 py-2 text-xs font-medium uppercase tracking-[0.035em] text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-[22px] backdrop-saturate-150 transition-colors hover:bg-white/32 hover:text-white"
            >
              Связаться
            </Link>
          </nav>
        </motion.div>
      ) : null}

      <motion.div
        className={cn(
          'relative z-[150]',
          'grid w-full max-w-full grid-cols-5 items-center rounded-2xl border p-2 mob:flex mob:justify-between mob:p-1.5',
          isHome
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
