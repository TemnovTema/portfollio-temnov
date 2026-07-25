export const metadata = {
  title: 'Портфолио как цифровой продукт',
  description: 'Продуктовый кейс личного сайта-портфолио: структура, типографика, функции и frontend-реализация.',
}

import Image from 'next/image'
import Link from 'next/link'
import {ArrowUpRight} from 'lucide-react'

import {cn} from '@/lib/utils'
import Container from '~/Global/Container'
import ScrollProgress from '~~/research/ScrollProgress'
import {BUTTON_SIZES, BUTTON_VARIANTS} from '~/UI/Button'

const TAGS = ['Product Design', 'Next.js', 'Motion', 'Web']
const META = [
  {label: 'Формат', value: 'Личный цифровой продукт'},
  {label: 'Роль', value: 'Продуктовый дизайн и разработка'},
  {label: 'Стек', value: 'Next.js, React, TypeScript, MDX'},
]
const PIPELINE = [
  {title: 'Изучить рынок', text: 'Сравнил портфолио продуктовых и цифровых дизайнеров.', tone: 'bg-neutral-300'},
  {title: 'Собрать структуру', text: 'Спроектировал маршруты, архив и содержание кейсов.', tone: 'bg-neutral-500'},
  {title: 'Создать систему', text: 'Разработал типографику, компоненты и адаптивные правила.', tone: 'bg-neutral-300'},
  {title: 'Реализовать в коде', text: 'Собрал сайт на Next.js и настроил публикацию через Vercel.', tone: 'bg-white'},
]
const TECH = ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'MDX', 'Motion', 'GitHub', 'Vercel']

function Visual({src, alt, className, imageClassName}: {src: string; alt: string; className?: string; imageClassName?: string}) {
  return (
    <figure className={cn('group relative overflow-hidden rounded-[28px] bg-[#111] mob:rounded-2xl', className)}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 90vw" className={cn('object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]', imageClassName)} />
    </figure>
  )
}

function Label({children, dark = false}: {children: React.ReactNode; dark?: boolean}) {
  return <p className={cn('font-mono text-xs uppercase tracking-[0.14em]', dark ? 'text-black/55' : 'text-neutral-500')}>{children}</p>
}

export default function PortfolioCasePage() {
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
                <h1 className="text-[clamp(4.5rem,13vw,13rem)] font-semibold leading-[0.76] tracking-[-0.085em] text-neutral-300 mob:text-[10.4vw]">PORTFOLIO</h1>
                <p className="mt-12 max-w-[26ch] text-[clamp(1.65rem,3vw,3.25rem)] leading-[1.08] tracking-[-0.04em] text-neutral-300 mob:mt-8 mob:text-2xl">
                  Личный сайт как цифровой продукт.
                </p>
              </div>
              <div className="space-y-7">
                <p className="max-w-[34ch] text-lg leading-[1.45] text-neutral-400">Система, которая помогает выбрать релевантный проект, понять мой подход и перейти к контакту.</p>
                <Link href="/" className={cn(BUTTON_VARIANTS.DEFAULT, BUTTON_VARIANTS.solid, BUTTON_SIZES.base, 'group w-full whitespace-nowrap')}>
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:rotate-12" strokeWidth={1.5} />
                  Открыть главную
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

          <Visual src="/cases/portfolio/cover.png" alt="Обзор проектов личного портфолио" className="aspect-[1.486/1]" />

          <section className="grid gap-12 py-36 lg:grid-cols-[1fr_1.1fr] lg:items-end mob:py-20">
            <Label>Цель</Label>
            <div>
              <h2 className="max-w-[13ch] text-[clamp(3.4rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300 mob:text-[3.1rem]">
                Объяснить подход за несколько минут
              </h2>
              <p className="mt-9 max-w-[38ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">
                HR, лид-дизайнер или заказчик должен быстро увидеть специализацию, уровень работ, личный вклад и следующий шаг.
              </p>
            </div>
          </section>
        </Container>

        <section className="bg-[#e8e8e3] py-24 text-[#080808] mob:py-14">
          <Container variant="default">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <Label dark>Контекст</Label>
                <h2 className="mt-7 max-w-[10ch] text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.84] tracking-[-0.07em]">Портфолио конкурирует за внимание</h2>
              </div>
              <p className="max-w-[34ch] text-xl leading-[1.45] text-black/70 mob:text-lg">
                Длинные тексты, скрытая навигация и декоративные мокапы мешают понять, что именно сделал дизайнер и зачем.
              </p>
            </div>
          </Container>
        </section>

        <Container variant="default">
          <section className="grid gap-16 py-36 lg:grid-cols-[0.55fr_1.45fr] mob:py-20">
            <div>
              <Label>Пайплайн</Label>
              <p className="mt-7 max-w-[30ch] text-xl leading-[1.5] text-neutral-400">От анализа портфолио до работающей расширяемой системы.</p>
            </div>
            <div className="grid gap-14">
              {PIPELINE.map((item) => (
                <article key={item.title} className="grid gap-7 sm:grid-cols-[10rem_1fr] sm:items-center">
                  <div className="grid h-24 grid-cols-4 grid-rows-3 gap-1.5" aria-hidden="true">
                    <span className={cn(item.tone, 'col-span-3')} />
                    <span className={cn(item.tone, 'col-start-2 col-span-2')} />
                    <span className={cn(item.tone, 'col-span-1')} />
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

        <section className="bg-[#bfc1bd] py-24 text-[#080808] mob:py-14">
          <Container variant="default">
            <Label dark>Исследование</Label>
            <h2 className="mt-7 max-w-[13ch] text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">Сравнительный обзор вместо догадок</h2>
            <div className="mt-16 grid gap-10 text-[clamp(1.8rem,3.5vw,3.75rem)] leading-[1.05] tracking-[-0.04em] lg:grid-cols-2">
              <p>Сильные сайты быстро показывают специализацию и отобранные кейсы.</p>
              <p>Слабые прячут вклад автора за эффектами и длинными описаниями.</p>
            </div>
          </Container>
        </section>

        <Container variant="default">
          <section className="py-36 mob:py-20">
            <Label>Главная</Label>
            <h2 className="mt-7 max-w-[12ch] text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300">Первое впечатление ведёт к работе</h2>
            <Visual src="/cases/portfolio/home.png" alt="Главная страница портфолио" className="mt-12 aspect-[1.44/1]" imageClassName="object-top" />
          </section>

          <section className="pb-36 mob:pb-20">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
              <div>
                <Label>Архив</Label>
                <h2 className="mt-6 text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300">Два способа исследовать проекты</h2>
                <p className="mt-8 max-w-[34ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">Папки дают понятные категории, а дашборд позволяет свободно просматривать всю коллекцию.</p>
              </div>
              <Visual src="/cases/portfolio/archive.png" alt="Архив проектов портфолио" className="aspect-[1.44/1]" />
            </div>
          </section>
        </Container>

        <section className="bg-[#e8e8e3] py-24 text-[#080808] mob:py-14">
          <Container variant="default">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <Visual src="/cases/portfolio/case.png" alt="Подробная страница продуктового кейса" className="aspect-[1.44/1]" />
              <div>
                <Label dark>Система кейсов</Label>
                <h2 className="mt-6 text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em]">Одна структура. Разная драматургия.</h2>
                <p className="mt-8 max-w-[33ch] text-xl leading-[1.5] text-black/70 mob:text-lg">Переиспользуемые компоненты удерживают качество, а каждый проект сохраняет собственный визуальный язык.</p>
              </div>
            </div>
          </Container>
        </section>

        <Container variant="default">
          <section className="grid gap-14 py-36 lg:grid-cols-[0.7fr_1.3fr] mob:py-20">
            <div>
              <Label>Технологии</Label>
              <h2 className="mt-6 max-w-[10ch] text-[clamp(3.25rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.055em] text-neutral-300">Дизайн сразу проверяется кодом</h2>
            </div>
            <div className="flex flex-wrap content-end gap-x-4 gap-y-3 text-[clamp(1.8rem,3.5vw,3.75rem)] leading-[1.05] tracking-[-0.04em] text-neutral-300">
              {TECH.map((item) => <span key={item}>{item}</span>)}
            </div>
          </section>

          <section className="grid gap-14 pb-36 lg:grid-cols-2 mob:pb-20">
            <div>
              <Label>Статус</Label>
              <h2 className="mt-6 max-w-[11ch] text-[clamp(3.25rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.055em] text-neutral-300">Опубликованный продукт</h2>
            </div>
            <p className="self-end max-w-[39ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">Основные маршруты, адаптивная версия и кейсы реализованы. Система продолжает развиваться вместе с новыми работами.</p>
          </section>
        </Container>

        <section className="bg-[#f0f0ec] py-24 text-[#080808] mob:py-14">
          <Container variant="default">
            <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:items-end">
              <Label dark>Следующий вопрос</Label>
              <h2 className="max-w-[15ch] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">Какие страницы и кейсы действительно приводят посетителя к контакту?</h2>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
