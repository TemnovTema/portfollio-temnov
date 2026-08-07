import {ITEMS} from '@/app/archive/storage'

import CaseCard from '~~/archive/CaseCard'
import Container from '~/Global/Container'
import {typoClasses} from '~/UI/Typography'

export const metadata = {
  title: 'Графика',
  description: 'Плакаты, типографические серии и визуальные эксперименты Артёма Темнова.',
}

const GRAPHICS_SLUGS = ['case-2', 'case-12', 'case-13']
const GRAPHICS_ITEMS = GRAPHICS_SLUGS.map((slug) => ITEMS.find((item) => item.slug === slug)).filter((item) => item !== undefined)

export default function GraphicsPage() {
  return (
    <Container as="main" variant="default" className="space-y-12 pb-32 mob:space-y-8 mob:pb-20">
      <section className="space-y-5">
        <h1 className={typoClasses.h2}>Графика</h1>
        <p className="max-w-[46ch] text-[clamp(1.35rem,2.15vw,2rem)] leading-[1.35] tracking-[-0.025em] text-neutral-300 mob:text-xl mob:leading-[1.4]">
          Плакаты, типографические серии и визуальные эксперименты — проекты, в которых композиция, изображение и шрифт становятся основным инструментом высказывания.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4 mob:grid-cols-1" aria-label="Проекты в папке Графика">
        {GRAPHICS_ITEMS.map((item, index) => <CaseCard item={item} index={index} key={item.slug} />)}
      </section>
    </Container>
  )
}
