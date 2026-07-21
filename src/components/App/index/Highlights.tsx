import {WEBSITE_PATHS} from '@/lib/constants'
import {cn} from '@/lib/utils'
import {ITEMS, SOCIALS} from '@/app/archive/storage'

import Image from 'next/image'
import Link from 'next/link'
import {ArrowUpRight} from 'lucide-react'
import {BUTTON_SIZES, BUTTON_VARIANTS} from '~/UI/Button'
import {H2, H4, H5, P} from '~/UI/Typography'

const featuredCases = ITEMS.slice(0, 4)

export default function Highlights() {
  return (
    <section id="featured-cases" data-section="featured-cases" className={cn('space-y-8 scroll-mt-28')}>
      <div className="space-y-3">
        <H2 className="text-[clamp(2.5rem,4.2vw,3.75rem)] leading-[1.02]! tracking-[-0.045em] mob:text-[2.125rem] mob:leading-[1.06]!">
          Избранные кейсы
        </H2>
        <H4 className="max-w-[54ch] font-sans text-lg normal-case leading-[1.5] text-neutral-400 mob:text-base mob:leading-[1.45]">
          Четыре направления, через которые лучше всего видно мой подход: сценарии, продуктовая структура, системность интерфейса и работа с запуском.
        </H4>
      </div>

      <div className="grid grid-cols-2 gap-4 mob:grid-cols-1">
        {featuredCases.map((item, idx) => (
          <Link
            href={item.link ?? `${WEBSITE_PATHS.archive}#${item.slug}`}
            key={item.slug}
            className="block group"
          >
            <article
              className={cn(
                'min-h-[34rem] mob:min-h-0 p-4 mob:p-3.5 flex flex-col gap-4',
                'rounded-[22px] border border-white/15 bg-black-light',
                'transition-colors duration-300 group-hover:border-white/35 group-hover:bg-black-card',
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-mono uppercase text-gray">{idx + 1}</span>
                <span className="px-2.5 py-1 text-xs font-mono uppercase rounded-full border border-white/10 text-white-dirty">{SOCIALS[item.source]}</span>
              </div>

              <div
                className={cn(
                  'relative overflow-hidden rounded-[18px] border border-dashed border-white/15',
                  'bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_45%),linear-gradient(180deg,_rgba(18,18,18,0.98),_rgba(8,8,8,1))]',
                  'aspect-[4/3]',
                )}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title ?? 'Обложка кейса'}
                    fill
                    className="object-cover duration-500 group-hover:scale-[1.025]"
                  />
                ) : item.video ? (
                  <video autoPlay muted loop className="h-full w-full object-cover duration-500 group-hover:scale-[1.025]">
                    <source src={item.video} type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />
                    <div className="relative z-10 flex h-full items-end justify-between p-4">
                      <span className="text-xs font-mono uppercase text-gray">Обложка кейса</span>
                      <span className="text-xs font-mono uppercase text-white-dirty/60">Placeholder</span>
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
                  <ArrowUpRight strokeWidth={1.5} />
                  Открыть кейс
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
