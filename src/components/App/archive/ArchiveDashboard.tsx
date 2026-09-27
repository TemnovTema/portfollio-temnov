'use client'

import {SOCIALS, type SocialSource, type SocialsItem} from '@/app/archive/storage'
import {cn} from '@/lib/utils'

import {ArrowUpRight} from 'lucide-react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import SocialsIcon from '~~/socials/SocialsIcon'

const DASHBOARD_ACCENTS: Record<SocialSource, string> = {
  product: 'from-[#2b2b2b] via-[#111111] to-[#466ac4]',
  systems: 'from-[#2c2c2c] via-[#101010] to-[#d7b412]',
  research: 'from-[#2b2b2b] via-[#111111] to-[#c478d8]',
  launches: 'from-[#2b2b2b] via-[#111111] to-[#6f9951]',
}

const BALANCED_LAYOUTS = [
  'col-span-7 row-span-5',
  'col-span-5 row-span-5',
  'col-span-4 row-span-4',
  'col-span-8 row-span-4',
  'col-span-5 row-span-5',
  'col-span-7 row-span-5',
]

const MOBILE_LAYOUTS = [
  'mob:col-span-2 mob:row-span-4',
  'mob:col-span-1 mob:row-span-4',
  'mob:col-span-1 mob:row-span-4',
  'mob:col-span-2 mob:row-span-4',
  'mob:col-span-1 mob:row-span-4',
  'mob:col-span-1 mob:row-span-4',
] as const

function getCaseNumber(slug: string) {
  const number = slug.replace('case-', '')
  return `Case ${number.padStart(2, '0')}`
}

function DashboardCard({item, prominent, eager}: {item: SocialsItem; prominent: boolean; eager: boolean}) {
  const {slug, source, link, title, image, video} = item
  const href = link ?? `/archive#${slug}`
  const isExternal = href.startsWith('http')

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={title ?? slug}
      className={cn(
        'group relative block h-full overflow-hidden rounded-[22px] border border-white/15 bg-black-card text-left',
        'shadow-[0_18px_50px_rgba(0,0,0,0.3)] transition-[border-color,transform] duration-300',
        'hover:-translate-y-1 hover:border-white/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
        'mob:rounded-[16px] mob:shadow-none',
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={title ?? 'Обложка проекта'}
          fill
          sizes="(max-width: 500px) 100vw, (max-width: 1280px) 60vw, 42vw"
          loading={eager ? 'eager' : 'lazy'}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      ) : video ? (
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]">
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <div className={cn('absolute inset-0 bg-gradient-to-br', DASHBOARD_ACCENTS[source])}>
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/5" />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 mob:p-3">
        <div className="flex items-center gap-1.5 rounded-full border border-white/12 bg-black/60 px-2.5 py-1 backdrop-blur-sm mob:px-2 mob:py-0.5">
          <SocialsIcon mode="light" source={source} className="size-4 mob:size-3.5" />
          <span className="text-[11px] font-mono uppercase text-white-dirty mob:text-[9px]">{SOCIALS[source]}</span>
        </div>

        <span className="font-mono text-[11px] uppercase text-white/55 mob:text-[9px]">{getCaseNumber(slug)}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 mob:p-3">
        <div className="min-w-0 space-y-2">
          <h2 className={cn(
            'max-w-[22ch] font-semibold leading-[1.05] tracking-[-0.035em] text-white',
            prominent ? 'text-[clamp(1.5rem,2.4vw,2.75rem)]' : 'text-[clamp(1.05rem,1.55vw,1.5rem)]',
            'mob:text-base mob:leading-[1.08]',
          )}>
            {title}
          </h2>
        </div>

        <div className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 bg-black/50 backdrop-blur-sm mob:size-8">
          <ArrowUpRight className="size-[18px] text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 mob:size-4" strokeWidth={1.6} />
        </div>
      </div>
    </Link>
  )
}

export default function ArchiveDashboard({items}: {items: SocialsItem[]}) {
  return (
    <section data-section="archive-dashboard" className="relative">
      <div
        className={cn(
          'relative grid grid-flow-dense grid-cols-12 auto-rows-[4.75rem] gap-3',
          'mob:grid-cols-2 mob:auto-rows-[4.25rem] mob:gap-2.5',
        )}
      >
        {items.map((item, index) => {
            const layout = BALANCED_LAYOUTS[index % BALANCED_LAYOUTS.length]
            const mobileLayout = MOBILE_LAYOUTS[index % MOBILE_LAYOUTS.length]
            const prominent = layout.includes('col-span-7') || layout.includes('col-span-8')

            return (
              <motion.article
                key={item.slug}
                layout
                transition={{duration: 0.42, ease: [0.23, 1, 0.32, 1]}}
                className={cn(layout, mobileLayout, 'min-w-0')}
              >
                <DashboardCard item={item} prominent={prominent} eager={index === 0} />
              </motion.article>
            )
          })}
      </div>
    </section>
  )
}
