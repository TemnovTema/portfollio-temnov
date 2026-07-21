import type {SocialsItem} from '@/app/archive/storage'
import {SOCIALS} from '@/app/archive/storage'
import {WEBSITE_PATHS} from '@/lib/constants'
import {cn} from '@/lib/utils'

import {ArrowUpRight} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {BUTTON_SIZES, BUTTON_VARIANTS} from '~/UI/Button'
import {H5, P} from '~/UI/Typography'

export default function CaseCard({item, index}: {item: SocialsItem; index: number}) {
  const href = item.link ?? `${WEBSITE_PATHS.archive}#${item.slug}`
  const isExternal = href.startsWith('http')

  return (
    <Link href={href} className="group block" target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
      <article
        className={cn(
          'flex min-h-[34rem] flex-col gap-4 p-4 mob:min-h-0 mob:p-3.5',
          'rounded-[22px] border border-white/15 bg-black-light',
          'transition-colors duration-300 group-hover:border-white/35 group-hover:bg-black-card',
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-sm uppercase text-gray">{index + 1}</span>
          <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs uppercase text-white-dirty">{SOCIALS[item.source]}</span>
        </div>

        <div
          className={cn(
            'relative aspect-[4/3] overflow-hidden rounded-[18px] border border-dashed border-white/15',
            'bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_45%),linear-gradient(180deg,_rgba(18,18,18,0.98),_rgba(8,8,8,1))]',
          )}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title ?? 'Обложка кейса'}
              fill
              sizes="(max-width: 500px) calc(100vw - 48px), 44vw"
              loading={index === 0 ? 'eager' : 'lazy'}
              className="object-cover duration-500 group-hover:scale-[1.025]"
            />
          ) : item.video ? (
            <video autoPlay muted loop playsInline className="h-full w-full object-cover duration-500 group-hover:scale-[1.025]">
              <source src={item.video} type="video/mp4" />
            </video>
          ) : (
            <>
              <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="relative flex h-full items-end p-4">
                <span className="font-mono text-xs uppercase text-gray">Обложка проекта</span>
              </div>
            </>
          )}
        </div>

        <div className="space-y-3">
          <H5 className="font-sans text-2xl normal-case leading-[1.12] tracking-[-0.025em] text-neutral-300 mob:text-xl">{item.title}</H5>
          <P className="max-w-[54ch] text-base normal-case leading-[1.5]! text-neutral-400">{item.content[0]}</P>
        </div>

        <div className="mt-auto">
          <span className={cn(BUTTON_VARIANTS.DEFAULT, BUTTON_VARIANTS.solid, BUTTON_SIZES.base)}>
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
            Открыть кейс
          </span>
        </div>
      </article>
    </Link>
  )
}
