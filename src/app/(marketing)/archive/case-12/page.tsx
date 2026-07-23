export const metadata = {
  title: 'Серия плакатов. Дзен',
  description: 'Типографическая и графическая серия плакатов для школы новых самураев «Дзен».',
}

import Image from 'next/image'
import Link from 'next/link'

import Container from '~/Global/Container'
import ScrollProgress from '~~/research/ScrollProgress'

const POSTERS = [
  {
    src: '/cases/dzen-posters/graphic-series.jpg',
    alt: 'Три плаката школы новых самураев Дзен с синей графикой на красном, белом и тёмном фоне',
    caption: 'Графическая серия',
  },
  {
    src: '/cases/dzen-posters/typographic-series.jpg',
    alt: 'Три типографических плаката школы Дзен',
    caption: 'Шрифтовая серия',
  },
  {
    src: '/cases/dzen-posters/graphic-series-2.jpg',
    alt: 'Три монохромных коллажных плаката школы новых самураев',
    caption: 'Коллажная серия',
  },
  {
    src: '/cases/dzen-posters/graphic-series-3.jpg',
    alt: 'Три афиши открытого киновечера по творчеству Акиры Куросавы',
    caption: 'Афиши киновечера',
  },
  {
    src: '/cases/dzen-posters/graphic-series-5.jpg',
    alt: 'Четыре плаката с японскими пейзажами в интерьере',
    caption: 'Плакаты в пространстве',
  },
] as const

const META = [
  {label: 'Проект', value: 'Дзен'},
  {label: 'Формат', value: 'Серия плакатов'},
  {label: 'Фокус', value: 'Композиция, типографика, коллаж'},
]

export default function DzenPostersPage() {
  return (
    <>
      <ScrollProgress />

      <Container variant="default" className="space-y-20 pb-32 mob:space-y-12 mob:pb-20">
        <header className="space-y-12 mob:space-y-8">
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
            <Link href="/archive/graphics" className="transition-colors hover:text-neutral-200">← Графика</Link>
            <span>Poster series</span>
          </div>

          <div className="max-w-[78rem] space-y-7">
            <h1 className="max-w-[12ch] text-[clamp(4.5rem,8vw,9rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-neutral-300 mob:text-[3.25rem] mob:leading-[0.96]">
              Серия плакатов. Дзен
            </h1>
            <p className="max-w-[44ch] text-2xl leading-[1.3] text-neutral-400 mob:text-lg">
              Визуальная серия для школы новых самураев: от строгих типографических композиций до фотоколлажей и афиш событий.
            </p>
          </div>

          <div className="grid grid-cols-3 border-y border-white/12 max-[820px]:grid-cols-1 max-[820px]:divide-y max-[820px]:divide-white/12">
            {META.map((item) => (
              <div key={item.label} className="py-6 pr-8 max-[820px]:py-4">
                <div className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{item.label}</div>
                <div className="mt-3 max-w-[25ch] text-lg leading-tight text-neutral-300 mob:text-base">{item.value}</div>
              </div>
            ))}
          </div>
        </header>

        <section className="space-y-16 mob:space-y-8" aria-label="Плакаты серии Дзен">
          {POSTERS.map((poster, index) => (
            <figure key={poster.src} className="space-y-3">
              <div className="overflow-hidden rounded-[28px] border border-white/12 bg-[#111] mob:rounded-2xl">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  width={2400}
                  height={1701}
                  priority={index === 0}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="flex justify-between font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">
                <span>{poster.caption}</span>
                <span>{String(index + 1).padStart(2, '0')} / {String(POSTERS.length).padStart(2, '0')}</span>
              </figcaption>
            </figure>
          ))}
        </section>
      </Container>
    </>
  )
}
