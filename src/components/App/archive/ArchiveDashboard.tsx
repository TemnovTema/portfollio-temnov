'use client'

import {SOCIALS, type SocialSource, type SocialsItem} from '@/app/archive/storage'
import {cn} from '@/lib/utils'

import {motion, useDragControls} from 'framer-motion'
import {ArrowUpRight} from 'lucide-react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import type {PointerEvent as ReactPointerEvent, RefObject} from 'react'
import {useRef, useState} from 'react'

import SocialsIcon from '~~/socials/SocialsIcon'

const DASHBOARD_LAYOUT = [
  {left: '4%', top: '6%', width: '27%', rotate: -5},
  {left: '34%', top: '12%', width: '29%', rotate: 3},
  {left: '67%', top: '8%', width: '24%', rotate: -2},
  {left: '12%', top: '48%', width: '26%', rotate: 5},
  {left: '49%', top: '53%', width: '30%', rotate: -4},
] as const

const DASHBOARD_ACCENTS: Record<SocialSource, string> = {
  product: 'from-[#2b2b2b] via-[#111111] to-[#466ac4]',
  systems: 'from-[#2c2c2c] via-[#101010] to-[#d7b412]',
  research: 'from-[#2b2b2b] via-[#111111] to-[#c478d8]',
  launches: 'from-[#2b2b2b] via-[#111111] to-[#6f9951]',
}

function DashboardCard({
  item,
  onClick,
}: {
  item: SocialsItem
  onClick: () => void
}) {
  const {slug, source, link, title, image, video} = item

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={title ?? slug}
      className={cn(
        'group block overflow-hidden rounded-[22px] border border-white/15 bg-black-card',
        'shadow-[0_24px_60px_rgba(0,0,0,0.42)] transition-colors duration-300 hover:border-white/35',
        'w-full text-left',
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {image ? (
          <Image src={image} alt={title ?? 'Обложка проекта'} fill className="object-cover duration-500 group-hover:scale-[1.02]" />
        ) : video ? (
          <video autoPlay muted loop playsInline className="h-full w-full object-cover duration-500 group-hover:scale-[1.02]">
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <div className={cn('h-full w-full bg-gradient-to-br', DASHBOARD_ACCENTS[source])}>
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/55 px-2.5 py-1">
          <SocialsIcon mode="light" source={source} className="size-4" />
          <span className="text-[11px] font-mono uppercase text-white-dirty">{SOCIALS[source]}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase text-white/55">{slug.replace('case-', 'Case 0')}</div>
            <div className="max-w-[24ch] text-lg font-semibold leading-[1.08] tracking-tight text-white">{title}</div>
          </div>

          <div className="grid size-10 place-items-center rounded-full border border-white/15 bg-black/45 backdrop-blur-sm">
            <ArrowUpRight className="size-[18px] text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.6} />
          </div>
        </div>
      </div>
    </button>
  )
}

function DraggableDashboardCard({
  item,
  index,
  layout,
  activeSlug,
  setActiveSlug,
  boardRef,
}: {
  item: SocialsItem
  index: number
  layout: (typeof DASHBOARD_LAYOUT)[number]
  activeSlug: string | null
  setActiveSlug: (slug: string | null) => void
  boardRef: RefObject<HTMLDivElement | null>
}) {
  const router = useRouter()
  const dragControls = useDragControls()
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const blockNavigationRef = useRef(false)
  const pointerIsDownRef = useRef(false)

  const clearHoldTimer = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current)
      holdTimerRef.current = null
    }
  }

  const handleNavigate = () => {
    if (blockNavigationRef.current) {
      blockNavigationRef.current = false
      return
    }

    const href = item.link ?? `/archive#${item.slug}`
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer')
      return
    }

    router.push(href)
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerIsDownRef.current = true
    setActiveSlug(item.slug)

    const nativeEvent = event.nativeEvent
    clearHoldTimer()

    holdTimerRef.current = setTimeout(() => {
      if (!pointerIsDownRef.current) return
      blockNavigationRef.current = true
      dragControls.start(nativeEvent, {snapToCursor: false})
    }, 170)
  }

  const handlePointerRelease = () => {
    pointerIsDownRef.current = false
    clearHoldTimer()
  }

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={boardRef}
      dragElastic={0.08}
      dragMomentum={false}
      whileDrag={{scale: 1.03, rotate: layout.rotate + 1.5}}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerRelease}
      onPointerLeave={handlePointerRelease}
      onDragStart={() => {
        blockNavigationRef.current = true
        setActiveSlug(item.slug)
      }}
      onDragEnd={() => {
        handlePointerRelease()
        window.setTimeout(() => {
          blockNavigationRef.current = false
        }, 0)
      }}
      className="absolute touch-none cursor-grab active:cursor-grabbing"
      style={{
        left: layout.left,
        top: layout.top,
        width: layout.width,
        rotate: layout.rotate,
        zIndex: activeSlug === item.slug ? 40 : index + 10,
      }}
    >
      <DashboardCard item={item} onClick={handleNavigate} />
    </motion.div>
  )
}

export default function ArchiveDashboard({items}: {items: SocialsItem[]}) {
  const router = useRouter()
  const boardRef = useRef<HTMLDivElement>(null)
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  const handleNavigate = (item: SocialsItem) => {
    const href = item.link ?? `/archive#${item.slug}`
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer')
      return
    }

    router.push(href)
  }

  return (
    <section data-section="archive-dashboard" className="space-y-4">
      <div className="hidden rounded-[30px] border border-white/10 bg-black-light p-4 md:block">
        <div
          ref={boardRef}
          className={cn(
            'relative min-h-[58rem] overflow-hidden rounded-[24px] border border-white/8 bg-[#090909]',
            'bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_34%),linear-gradient(180deg,_rgba(11,11,11,1),_rgba(6,6,6,1))]',
          )}
        >
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px]" />

          {items.map((item, index) => {
            const layout = DASHBOARD_LAYOUT[index % DASHBOARD_LAYOUT.length]

            return (
              <DraggableDashboardCard
                key={item.slug}
                item={item}
                index={index}
                layout={layout}
                activeSlug={activeSlug}
                setActiveSlug={setActiveSlug}
                boardRef={boardRef}
              />
            )
          })}
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-black-light p-3 md:hidden">
        <div
          className={cn(
            'relative overflow-hidden rounded-[22px] border border-white/8 bg-[#090909]',
            'bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_34%),linear-gradient(180deg,_rgba(11,11,11,1),_rgba(6,6,6,1))]',
          )}
        >
          <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 py-3">
            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/40">Dashboard</div>
              <div className="text-sm font-mono uppercase text-white/70">Листай карточки вбок</div>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono uppercase text-white/45">
              {items.length} карточек
            </div>
          </div>

          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((item, index) => (
              <div
                key={item.slug}
                className={cn(
                  'min-w-[84vw] max-w-[84vw] snap-center',
                  index % 2 === 0 ? 'rotate-[-1.8deg]' : 'rotate-[1.8deg]',
                )}
              >
                <DashboardCard item={item} onClick={() => handleNavigate(item)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
