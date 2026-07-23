import {ITEMS} from '@/app/archive/storage'

import CaseCard from '~~/archive/CaseCard'
import Container from '~/Global/Container'
import {H2} from '~/UI/Typography'

export const metadata = {
  title: 'Концепты',
  description: 'Учебные идеи, ранние продукты и проекты Артёма Темнова в стадии концепции.',
}

const CONCEPT_SLUGS = ['case-1', 'case-3', 'case-11']
const CONCEPT_ITEMS = CONCEPT_SLUGS.map((slug) => ITEMS.find((item) => item.slug === slug)).filter((item) => item !== undefined)

export default function ConceptsPage() {
  return (
    <Container variant="default" className="space-y-12 pb-32 mob:space-y-8 mob:pb-20">
      <section className="space-y-5">
        <H2>Концепты</H2>
        <p className="max-w-[46ch] text-[clamp(1.35rem,2.15vw,2rem)] leading-[1.35] tracking-[-0.025em] text-neutral-300 mob:text-xl mob:leading-[1.4]">
          Здесь лежат учебные идеи, ранние продуктовые гипотезы и проекты, которые важны как часть моего дизайнерского пути — даже если они остались концептами или со временем изменились.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4 mob:grid-cols-1" aria-label="Проекты в папке Концепты">
        {CONCEPT_ITEMS.map((item, index) => <CaseCard item={item} index={index} key={item.slug} />)}
      </section>
    </Container>
  )
}
