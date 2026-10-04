import {cn} from '@/lib/utils'

import {ArrowUpRight} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import Container from '~/Global/Container'
import {BUTTON_SIZES, BUTTON_VARIANTS} from '~/UI/Button'

type StudySection = {
  title: string
  text: string
}

type ArchiveStudyCaseProps = {
  title: string
  intro: string
  cover: string
  detailImage?: string
  detailAlt?: string
  detailWidth?: number
  detailHeight?: number
  detailClassName?: string
  tags: string[]
  sections: StudySection[]
  liveUrl: string
  children?: React.ReactNode
}

export default function ArchiveStudyCase({
  title,
  intro,
  cover,
  detailImage,
  detailAlt,
  detailWidth = 1440,
  detailHeight = 1080,
  detailClassName,
  tags,
  sections,
  liveUrl,
  children,
}: ArchiveStudyCaseProps) {
  return (
    <Container as="main" variant="default" className="space-y-24 pb-32 pt-8 mob:space-y-14 mob:pb-20 mob:pt-4">
      <section className="space-y-8 mob:space-y-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-black/12 bg-white/25 px-3 py-1.5 font-mono text-xs uppercase text-black/52">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="max-w-[12ch] text-[clamp(4.5rem,8vw,8.5rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-black/90 mob:text-[clamp(2.5rem,11vw,3.25rem)] mob:leading-[0.96] mob:break-words">
          {title}
        </h1>

        <p className="max-w-[49rem] text-[clamp(1.35rem,2.15vw,2rem)] leading-[1.38] tracking-[-0.025em] text-black/64 mob:text-xl mob:leading-[1.45]">{intro}</p>

        <Link href={liveUrl} target="_blank" rel="noreferrer" className={cn(BUTTON_VARIANTS.DEFAULT, BUTTON_VARIANTS.outline, BUTTON_SIZES.base, 'rounded-full border-black bg-black text-white hover:border-black/75 hover:bg-black/75')}>
          <ArrowUpRight strokeWidth={1.5} />
          Открыть проект
        </Link>
      </section>

      <figure className="overflow-hidden rounded-[28px] border border-black/10 bg-white/35 shadow-[0_24px_80px_rgba(35,35,32,0.08)] mob:rounded-2xl">
        <Image src={cover} alt={`Первый экран проекта ${title}`} width={1440} height={1080} priority className="h-auto w-full" />
      </figure>

      <section className="grid grid-cols-2 gap-x-12 gap-y-12 mob:grid-cols-1 mob:gap-y-8">
        {sections.map((section) => (
          <article key={section.title} className="border-t border-black/14 pt-6">
            <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-black/88 mob:text-2xl">{section.title}</h2>
            <p className="mt-4 max-w-[42ch] text-lg leading-[1.55] text-black/56 mob:text-base">{section.text}</p>
          </article>
        ))}
      </section>

      {children}

      {detailImage && (
        <figure className="overflow-hidden rounded-[28px] border border-black/10 bg-white/35 shadow-[0_24px_80px_rgba(35,35,32,0.08)] mob:rounded-2xl">
          <Image src={detailImage} alt={detailAlt ?? ''} width={detailWidth} height={detailHeight} className={cn('h-auto w-full', detailClassName)} />
        </figure>
      )}
    </Container>
  )
}
