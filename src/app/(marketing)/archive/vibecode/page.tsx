import {ITEMS} from '@/app/archive/storage'

import CaseCard from '~~/archive/CaseCard'
import Container from '~/Global/Container'
import {H2} from '~/UI/Typography'

export const metadata = {
  title: 'VibeCode',
  description: 'Архив веб-экспериментов, интерактивных историй и учебных проектов Артёма Темнова.',
}

const VIBECODE_SLUGS = ['case-6', 'case-7', 'case-8']
const VIBECODE_ITEMS = VIBECODE_SLUGS.map((slug) => ITEMS.find((item) => item.slug === slug)).filter((item) => item !== undefined)

export default function VibeCodePage() {
  return (
    <Container variant="default" className="space-y-12 pb-32 mob:space-y-8 mob:pb-20">
      <section className="space-y-5">
        <H2>VibeCode</H2>
        <p className="max-w-[46ch] text-[clamp(1.35rem,2.15vw,2rem)] leading-[1.35] tracking-[-0.025em] text-neutral-300 mob:text-xl mob:leading-[1.4]">
          VibeCode собирает мои самостоятельные веб-эксперименты: от первых учебных страниц до интерактивных историй и типографических систем. Здесь я учился превращать идею в работающий интерфейс, проверять композицию кодом и доводить прототип до опубликованного сайта.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4 mob:grid-cols-1" aria-label="Проекты VibeCode">
        {VIBECODE_ITEMS.map((item, index) => <CaseCard item={item} index={index} key={item.slug} />)}
      </section>
    </Container>
  )
}
