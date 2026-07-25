export const metadata = {
  title: 'Темпо: баланс задач и отдыха',
  description: 'Продуктовый кейс мобильного приложения Темпо для планирования задач и заботы о себе.',
}

import Image from 'next/image'
import Link from 'next/link'
import {ArrowUpRight} from 'lucide-react'

import {cn} from '@/lib/utils'
import Container from '~/Global/Container'
import ScrollProgress from '~~/research/ScrollProgress'
import {BUTTON_SIZES, BUTTON_VARIANTS} from '~/UI/Button'

const SOURCE_URL = 'https://nika-vitkovskaya-portfolio.vercel.app/cases/tempo'
const TAGS = ['Product Design', 'Research', 'Mobile', 'HSE']
const META = [
  {label: 'Формат', value: 'Прототип мобильного приложения'},
  {label: 'Роль', value: 'Исследование, UX и визуальная система'},
  {label: 'Контекст', value: 'Учебный проект HSE Design'},
]
const PIPELINE = [
  {title: 'Понять нагрузку', text: 'Разобрал контекст задач, отдыха и личных дел.', color: 'bg-[#ff8a3d]'},
  {title: 'Собрать сценарии', text: 'Связал User Stories, Job Stories, JTBD и CJM.', color: 'bg-[#64a8ef]'},
  {title: 'Построить модель', text: 'Собрал функции продукта вокруг единого календаря.', color: 'bg-[#e95d8f]'},
  {title: 'Найти характер', text: 'Соединил спокойный интерфейс с эмоциональными персонажами.', color: 'bg-[#65c983]'},
]
const METHODS = ['User Story Mapping', 'User Stories', 'Job Stories', 'Jobs To Be Done', 'Два CJM', 'Функциональный паук']

function Visual({className, imageClassName}: {className?: string; imageClassName?: string}) {
  return (
    <figure className={cn('group relative overflow-hidden rounded-[28px] bg-[#f5f2eb] mob:rounded-2xl', className)}>
      <Image
        src="/cases/tempo/cover.webp"
        alt="Интерфейс и эмоциональные персонажи приложения Темпо"
        fill
        sizes="(max-width: 768px) 100vw, 90vw"
        className={cn('object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]', imageClassName)}
      />
    </figure>
  )
}

function Label({children, dark = false}: {children: React.ReactNode; dark?: boolean}) {
  return <p className={cn('font-mono text-xs uppercase tracking-[0.14em]', dark ? 'text-black/55' : 'text-neutral-500')}>{children}</p>
}

export default function TempoCasePage() {
  return (
    <>
      <ScrollProgress />
      <main className="overflow-hidden">
        <Container variant="default">
          <section className="flex min-h-[calc(100dvh-7rem)] flex-col justify-between gap-12 pb-16 pt-10 mob:min-h-0 mob:pb-12 mob:pt-5">
            <div className="flex items-start justify-between gap-6 mob:flex-col">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Продуктовый кейс</span>
              <div className="flex flex-wrap justify-end gap-2 mob:justify-start">
                {TAGS.map((tag) => <span key={tag} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-xs uppercase text-neutral-400">{tag}</span>)}
              </div>
            </div>

            <div className="grid items-end gap-10 lg:grid-cols-[1fr_24rem]">
              <div>
                <h1 className="text-[clamp(6rem,18vw,17rem)] font-semibold leading-[0.74] tracking-[-0.09em] text-neutral-300 mob:text-[17vw]">ТЕМПО</h1>
                <p className="mt-12 max-w-[29ch] text-[clamp(1.65rem,3vw,3.25rem)] leading-[1.08] tracking-[-0.04em] text-neutral-300 mob:mt-8 mob:text-2xl">
                  Баланс задач и отдыха в одном приложении.
                </p>
              </div>
              <div className="space-y-7">
                <p className="max-w-[34ch] text-lg leading-[1.45] text-neutral-400">Таск-менеджер, который помогает планировать нагрузку и восстановление без давления.</p>
                <Link href={SOURCE_URL} target="_blank" rel="noreferrer" className={cn(BUTTON_VARIANTS.DEFAULT, BUTTON_VARIANTS.solid, BUTTON_SIZES.base, 'group w-full whitespace-nowrap')}>
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:rotate-12" strokeWidth={1.5} />
                  Открыть полный кейс
                </Link>
              </div>
            </div>

            <dl className="grid gap-x-10 gap-y-7 border-t border-white/12 pt-6 lg:grid-cols-3">
              {META.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{item.label}</dt>
                  <dd className="mt-3 max-w-[32ch] text-base leading-[1.4] text-neutral-300">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <Visual className="aspect-[1.687/1] w-full" />

          <section className="grid gap-12 py-36 lg:grid-cols-[1fr_1.1fr] lg:items-end mob:py-20">
            <Label>Задача</Label>
            <div>
              <h2 className="max-w-[13ch] text-[clamp(3.4rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300 mob:text-[3.1rem]">
                Планировать работу и восстановление вместе
              </h2>
              <p className="mt-9 max-w-[38ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">
                Рабочие задачи, отдых и личные дела обычно живут в разных системах. Темпо показывает их как одну нагрузку.
              </p>
            </div>
          </section>
        </Container>

        <section className="bg-[#ff8a3d] py-24 text-[#111] mob:py-14">
          <Container variant="default">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <Label dark>Контекст</Label>
                <h2 className="mt-7 max-w-[10ch] text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.84] tracking-[-0.07em]">Планировщик не видит состояние человека</h2>
              </div>
              <p className="max-w-[34ch] text-xl leading-[1.45] text-black/70 mob:text-lg">
                Обычный календарь фиксирует время, но не помогает соотнести плотность дня, ресурс и необходимость восстановления.
              </p>
            </div>
          </Container>
        </section>

        <Container variant="default">
          <section className="grid gap-16 py-36 lg:grid-cols-[0.55fr_1.45fr] mob:py-20">
            <div>
              <Label>Пайплайн</Label>
              <p className="mt-7 max-w-[30ch] text-xl leading-[1.5] text-neutral-400">От исследования нагрузки до визуального языка приложения.</p>
            </div>
            <div className="grid gap-14">
              {PIPELINE.map((item) => (
                <article key={item.title} className="grid gap-7 sm:grid-cols-[10rem_1fr] sm:items-center">
                  <div className="grid h-24 grid-cols-4 grid-rows-3 gap-1.5" aria-hidden="true">
                    <span className={cn(item.color, 'col-span-3')} />
                    <span className={cn(item.color, 'col-start-2 col-span-2')} />
                    <span className={cn(item.color, 'col-span-1')} />
                  </div>
                  <div>
                    <h2 className="text-[clamp(2.25rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.05em] text-neutral-300">{item.title}</h2>
                    <p className="mt-4 max-w-[36ch] text-lg leading-[1.5] text-neutral-500">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Container>

        <section className="bg-[#64a8ef] py-24 text-[#111] mob:py-14">
          <Container variant="default">
            <Label dark>Исследование</Label>
            <h2 className="mt-7 max-w-[12ch] text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">Потребности превращаются в структуру</h2>
            <div className="mt-16 flex max-w-[70rem] flex-wrap gap-x-4 gap-y-3 text-[clamp(1.7rem,3.3vw,3.5rem)] leading-[1.05] tracking-[-0.04em]">
              {METHODS.map((method) => <span key={method}>{method}</span>)}
            </div>
          </Container>
        </section>

        <Container variant="default">
          <section className="py-36 mob:py-20">
            <Label>Решение</Label>
            <h2 className="mt-7 max-w-[12ch] text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300">Один календарь для всей нагрузки</h2>
            <Visual className="mt-12 aspect-[16/9]" imageClassName="object-right" />
            <p className="ml-auto mt-8 max-w-[34ch] text-xl leading-[1.5] text-neutral-400 mob:ml-0 mob:text-lg">
              Работа, рутины, фокусировка и восстановление видны рядом, а цвет помогает быстро различать тип активности.
            </p>
          </section>
        </Container>

        <section className="bg-[#e95d8f] py-24 text-[#111] mob:py-14">
          <Container variant="default">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <Label dark>Визуальный язык</Label>
                <h2 className="mt-7 max-w-[12ch] text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">Эмоции без медицинского тона</h2>
              </div>
              <p className="max-w-[34ch] text-xl leading-[1.5] text-black/70 mob:text-lg">
                Персонажи показывают состояние, а спокойная интерфейсная основа сохраняет продукт понятным и функциональным.
              </p>
            </div>
          </Container>
        </section>

        <Container variant="default">
          <section className="grid gap-14 py-36 lg:grid-cols-2 mob:py-20">
            <div>
              <Label>Статус</Label>
              <h2 className="mt-6 max-w-[11ch] text-[clamp(3.25rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.055em] text-neutral-300">Учебный продуктовый прототип</h2>
            </div>
            <p className="self-end max-w-[39ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">
              Концепция, исследовательская рамка, сценарии и визуальный язык собраны. Следующий этап: проверка планирования и восстановления на реальных пользователях.
            </p>
          </section>
        </Container>

        <section className="bg-[#65c983] py-24 text-[#111] mob:py-14">
          <Container variant="default">
            <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:items-end">
              <Label dark>Следующий вопрос</Label>
              <h2 className="max-w-[15ch] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                Помогает ли общий календарь реалистичнее оценивать собственную нагрузку?
              </h2>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
