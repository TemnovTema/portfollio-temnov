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
        'group relative block h-full overflow-hidden rounded-[22px] border border-black/80 bg-[#111] p-2 text-left',
        'shadow-[0_1.8rem_4rem_rgba(40,40,37,0.24),0_0.2rem_0.7rem_rgba(40,40,37,0.16)] transition-[transform,box-shadow] duration-300',
        'hover:-translate-y-1 hover:shadow-[0_2.2rem_4.8rem_rgba(40,40,37,0.3),0_0.3rem_0.8rem_rgba(40,40,37,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black/75',
        'mob:rounded-[18px] mob:p-1.5 mob:shadow-[0_0.8rem_2rem_rgba(40,40,37,0.18)]',
      )}
    >
      <div className="relative h-full overflow-hidden rounded-[15px] bg-neutral-900 mob:rounded-[13px]">
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/8 to-black/10" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3 mob:p-2.5">
          <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/42 px-2.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl mob:px-2 mob:py-0.5">
          <SocialsIcon mode="light" source={source} className="size-4 mob:size-3.5" />
          <span className="text-[11px] font-mono uppercase text-white-dirty mob:text-[9px]">{SOCIALS[source]}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="rounded-full border border-white/20 bg-black/42 px-2.5 py-1 font-mono text-[10px] uppercase text-white/68 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl mob:hidden">{getCaseNumber(slug)}</span>
            <span className="grid size-8 place-items-center rounded-full border border-white/25 bg-black/45 text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl mob:size-7">
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45 mob:size-3.5" strokeWidth={1.6} />
            </span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-3.5 mob:p-2.5">
          <div className="min-w-0 space-y-1.5">
          <h2 className={cn(
            'max-w-[22ch] font-semibold leading-[1.05] tracking-[-0.035em] text-white',
            prominent ? 'text-[clamp(1.5rem,2.4vw,2.75rem)]' : 'text-[clamp(1.05rem,1.55vw,1.5rem)]',
            'mob:text-base mob:leading-[1.08]',
          )}>
            {title}
          </h2>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.055em] text-white/58">Открыть проект <ArrowUpRight className="size-3" strokeWidth={1.5} /></span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ArchiveDashboard({items}: {items: SocialsItem[]}) {
  return (
    <motion.section
      data-section="archive-dashboard"
      className="relative"
      initial={{opacity: 0, y: 8}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -6}}
      transition={{duration: 0.28, ease: [0.23, 1, 0.32, 1]}}
    >
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
    </motion.section>
  )
}
