export const metadata = {
  title: 'Темпо: баланс задач и отдыха',
  description: 'Продуктовый кейс мобильного приложения Темпо для планирования задач и заботы о себе.',
}

import Image from 'next/image'
import Link from 'next/link'

import Container from '~/Global/Container'
import ScrollProgress from '~~/research/ScrollProgress'

const SOURCE_URL = 'https://nika-vitkovskaya-portfolio.vercel.app/cases/tempo'

const META = [
  {label: 'Формат', value: 'Учебный проект HSE Design'},
  {label: 'Продукт', value: 'Мобильное приложение'},
  {label: 'Фокус', value: 'Исследование, UX, визуальный язык'},
]

const RESEARCH_GROUPS = [
  {
    title: 'Структура опыта',
    items: ['User Story Mapping', 'User Stories', 'Job Stories'],
  },
  {
    title: 'Потребности и контекст',
    items: ['Jobs To Be Done', 'CJM холодного сценария', 'CJM горячего сценария'],
  },
  {
    title: 'Модель продукта',
    items: ['Функциональный паук'],
  },
] as const

export default function TempoCasePage() {
  return (
    <>
      <ScrollProgress />

      <Container variant="default" className="space-y-24 pb-32 mob:space-y-16 mob:pb-20">
        <header className="space-y-12 mob:space-y-8">
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
            <span>Product case</span>
            <span>Tempo</span>
          </div>

          <div className="max-w-[76rem] space-y-7">
            <h1 className="max-w-[13ch] text-[clamp(4.5rem,8vw,9rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-neutral-300 mob:text-[3.25rem] mob:leading-[0.96]">
              Прототип приложения «Темпо»
            </h1>
            <p className="max-w-[38ch] text-2xl leading-[1.25] text-neutral-400 mob:text-lg">
              Таск-менеджер для планирования задач и заботы о себе без давления и перегрузки.
            </p>
          </div>

          <div className="grid grid-cols-3 border-y border-white/12 max-[820px]:grid-cols-1 max-[820px]:divide-y max-[820px]:divide-white/12">
            {META.map((item) => (
              <div key={item.label} className="py-6 pr-8 max-[820px]:py-4">
                <div className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{item.label}</div>
                <div className="mt-3 max-w-[24ch] text-lg leading-tight text-neutral-300 mob:text-base">{item.value}</div>
              </div>
            ))}
          </div>
        </header>

        <figure className="overflow-hidden rounded-[28px] border border-white/12 bg-[#f4f4f2] mob:rounded-2xl">
          <Image
            src="/cases/tempo/cover.webp"
            alt="Промо-визуал мобильного приложения Темпо"
            width={2143}
            height={1270}
            priority
            className="h-auto w-full"
          />
        </figure>

        <section className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-16 border-t border-white/12 pt-10 max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <h2 className="text-6xl font-medium leading-[0.95] tracking-[-0.045em] text-neutral-400 mob:text-4xl">Задача</h2>
          <div className="max-w-[44rem] space-y-6 text-2xl leading-[1.3] text-neutral-300 mob:text-lg">
            <p>Собрать планирование задач и восстановление в одном мобильном продукте.</p>
            <p className="text-neutral-500">Темпо помогает видеть рабочую нагрузку рядом с отдыхом и личными делами, а не вести их в разрозненных системах.</p>
          </div>
        </section>

        <section className="space-y-14 border-t border-white/12 pt-10 mob:space-y-9">
          <div className="max-w-[66rem] space-y-5">
            <h2 className="text-7xl font-medium leading-[0.94] tracking-[-0.05em] text-neutral-300 mob:text-4xl">Исследовательская рамка</h2>
            <p className="max-w-[48ch] text-xl leading-[1.4] text-neutral-500 mob:text-base">
              В кейсе собраны методы, которые связывают потребности пользователя, сценарии и будущую структуру продукта.
            </p>
          </div>

          <div className="grid grid-cols-[minmax(15rem,0.75fr)_minmax(0,1.25fr)] gap-x-14 max-[760px]:grid-cols-1">
            {RESEARCH_GROUPS.map((group) => (
              <div key={group.title} className="col-span-2 grid grid-cols-subgrid border-t border-white/10 py-7 max-[760px]:col-span-1 max-[760px]:grid-cols-1 max-[760px]:gap-4">
                <h3 className="text-xl font-medium text-neutral-500">{group.title}</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-2xl leading-tight text-neutral-300 mob:text-lg">
                  {group.items.map((item, index) => (
                    <span key={item}>
                      {item}{index < group.items.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid min-h-[38rem] content-between gap-24 rounded-[28px] border border-white/12 bg-black-light p-12 mob:min-h-0 mob:gap-16 mob:rounded-2xl mob:p-6">
          <div className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-600">Позиционирование</div>
          <div className="max-w-[74rem]">
            <h2 className="text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.93] tracking-[-0.06em] text-neutral-300 mob:text-[2.75rem]">
              Баланс задач и отдыха в одном приложении
            </h2>
          </div>
        </section>

        <section className="grid grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] gap-16 border-t border-white/12 pt-10 max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <div className="space-y-6">
            <h2 className="text-7xl font-medium leading-[0.94] tracking-[-0.05em] text-neutral-300 mob:text-4xl">Визуальная часть</h2>
            <p className="max-w-[44ch] text-xl leading-[1.4] text-neutral-500 mob:text-base">
              Светлая интерфейсная основа дополняется цветными эмоциональными персонажами. Они делают тему нагрузки и самочувствия понятнее без медицинского тона.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-[1.45] text-neutral-400 mob:text-base">
            <p>Крупная типографика удерживает продукт простым и дружелюбным.</p>
            <p>Цвет используется как сигнал состояния, а не как декоративный фон.</p>
          </div>
        </section>

        <section className="flex min-h-[30rem] flex-col items-start justify-between gap-16 border-t border-white/12 pt-10 mob:min-h-0">
          <div className="space-y-5">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-600">Исходный проект</div>
            <h2 className="max-w-[15ch] text-6xl font-medium leading-[0.96] tracking-[-0.045em] text-neutral-300 mob:text-4xl">
              Продолжить знакомство с проектом
            </h2>
          </div>

          <Link
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white bg-white px-7 py-4 font-mono text-sm uppercase tracking-[0.08em] text-black transition-transform duration-200 active:scale-[0.98]"
          >
            Открыть полный кейс
          </Link>
        </section>
      </Container>
    </>
  )
}
