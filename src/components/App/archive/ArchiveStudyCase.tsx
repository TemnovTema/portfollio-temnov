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
  detailImage: string
  detailAlt: string
  detailWidth?: number
  detailHeight?: number
  detailClassName?: string
  tags: string[]
  sections: StudySection[]
  liveUrl: string
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
}: ArchiveStudyCaseProps) {
  return (
    <Container variant="default" className="space-y-20 pb-32 mob:space-y-12 mob:pb-20">
      <section className="space-y-8 mob:space-y-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/12 px-3 py-1.5 font-mono text-xs uppercase text-neutral-400">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="max-w-[12ch] text-[clamp(4.5rem,8vw,8.5rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-neutral-300 mob:text-[3.25rem] mob:leading-[0.96]">
          {title}
        </h1>

        <p className="max-w-[49rem] text-[clamp(1.35rem,2.15vw,2rem)] leading-[1.38] tracking-[-0.025em] text-neutral-300 mob:text-xl mob:leading-[1.45]">{intro}</p>

        <Link href={liveUrl} target="_blank" rel="noreferrer" className={cn(BUTTON_VARIANTS.DEFAULT, BUTTON_VARIANTS.solid, BUTTON_SIZES.base)}>
          <ArrowUpRight strokeWidth={1.5} />
          Открыть проект
        </Link>
      </section>

      <figure className="overflow-hidden rounded-[28px] border border-white/12 bg-black-light mob:rounded-2xl">
        <Image src={cover} alt={`Первый экран проекта ${title}`} width={1440} height={1080} priority className="h-auto w-full" />
      </figure>

      <section className="grid grid-cols-2 gap-x-12 gap-y-12 mob:grid-cols-1 mob:gap-y-8">
        {sections.map((section) => (
          <article key={section.title} className="border-t border-white/12 pt-6">
            <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-neutral-300 mob:text-2xl">{section.title}</h2>
            <p className="mt-4 max-w-[42ch] text-lg leading-[1.55] text-neutral-400 mob:text-base">{section.text}</p>
          </article>
        ))}
      </section>

      <figure className="overflow-hidden rounded-[28px] border border-white/12 bg-black-light mob:rounded-2xl">
        <Image src={detailImage} alt={detailAlt} width={detailWidth} height={detailHeight} className={cn('h-auto w-full', detailClassName)} />
      </figure>
    </Container>
  )
}
