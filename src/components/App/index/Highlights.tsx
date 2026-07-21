import {cn} from '@/lib/utils'
import {ITEMS} from '@/app/archive/storage'

import CaseCard from '~~/archive/CaseCard'
import {H2, H4} from '~/UI/Typography'

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
        {featuredCases.map((item, index) => <CaseCard item={item} index={index} key={item.slug} />)}
      </div>
    </section>
  )
}
