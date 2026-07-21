export const metadata = {
  title: 'Личное портфолио как цифровой продукт',
  description: 'Продуктовый кейс личного сайта-портфолио: исследования, информационная архитектура, типографика, функции и технологии.',
}

import path from 'path'
import fs from 'fs/promises'

import Image from 'next/image'
import Link from 'next/link'
import {Children, type HTMLAttributes} from 'react'
import {MDXRemote} from 'next-mdx-remote/rsc'

import Container from '~/Global/Container'
import {MDX} from '~/UI/MDX'
import ScrollProgress from '~~/research/ScrollProgress'

async function getContent() {
  const filePath = path.join(process.cwd(), 'src/app/(marketing)/archive/case-4/content.mdx')
  return await fs.readFile(filePath, 'utf8')
}

const META_LABELS = ['Case Study', 'Portfolio Product']
const META_ITEMS = [
  {label: 'Формат', value: 'Личный цифровой продукт'},
  {label: 'Роль', value: 'Продуктовый дизайн + разработка'},
  {label: 'Фокус', value: 'Структура, типографика, motion'},
  {label: 'Стек', value: 'Next.js, React, TypeScript'},
  {label: 'Сайт', value: 'Открыть главную', href: '/'},
]

function CaseScreen({src, alt, caption, priority = false}: {src: string; alt: string; caption: string; priority?: boolean}) {
  return (
    <figure className="my-20 mob:my-12">
      <div className="overflow-hidden rounded-[28px] border border-white/12 bg-black-light mob:rounded-2xl">
        <Image src={src} alt={alt} width={1440} height={1000} priority={priority} className="h-auto w-full" />
      </div>
      <figcaption className="mt-3 max-w-[54rem] font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{caption}</figcaption>
    </figure>
  )
}

function PortfolioRoute() {
  const steps = ['Главная', 'Выбор кейса', 'Контекст и решения', 'Обо мне', 'Контакт']

  return (
    <figure className="my-16 border-y border-white/12 py-9 mob:my-12 mob:py-7">
      <figcaption className="mb-7 font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">Основной маршрут посетителя</figcaption>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-4 text-2xl leading-tight text-neutral-200 mob:grid mob:grid-cols-[1fr_auto] mob:text-lg">
        {steps.map((step, index) => (
          <div key={step} className="contents md:flex md:items-center md:gap-4">
            <span>{step}</span>
            {index < steps.length - 1 && <span className="text-neutral-600" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
    </figure>
  )
}

function TypeSystem() {
  return (
    <figure className="my-20 grid gap-4 md:grid-cols-[1.5fr_1fr] mob:my-12">
      <div className="flex min-h-[24rem] flex-col justify-between rounded-[28px] border border-white/12 bg-black-light p-8 mob:min-h-[18rem] mob:rounded-2xl mob:p-5">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-600">Suisse Intl</span>
        <div>
          <div className="text-[clamp(5rem,11vw,10rem)] font-semibold leading-[0.8] tracking-[-0.07em] text-neutral-300">Aa</div>
          <p className="mt-8 max-w-[24ch] text-2xl leading-[1.15] tracking-tight text-neutral-400 mob:text-xl">Крупные заголовки, основной текст и продуктовая иерархия.</p>
        </div>
      </div>
      <div className="flex min-h-[24rem] flex-col justify-between rounded-[28px] border border-white/12 bg-black-card p-8 mob:min-h-[16rem] mob:rounded-2xl mob:p-5">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-600">Geist Mono</span>
        <div className="font-mono">
          <div className="text-6xl leading-none text-neutral-300 mob:text-5xl">01/04</div>
          <p className="mt-8 max-w-[27ch] text-sm uppercase leading-[1.5] tracking-[0.08em] text-neutral-500">Навигация, категории, метаданные и короткие действия.</p>
        </div>
      </div>
    </figure>
  )
}

function TechSystem() {
  const items = [
    ['Основа', 'Next.js 16 + React 19'],
    ['Код', 'TypeScript'],
    ['Стили', 'Tailwind CSS 4'],
    ['Контент', 'MDX'],
    ['Движение', 'Framer Motion'],
    ['Публикация', 'GitHub + Vercel'],
  ]

  return (
    <dl className="my-16 grid max-w-[72rem] grid-cols-2 gap-x-8 gap-y-7 mob:my-12 mob:grid-cols-1">
      {items.map(([term, value]) => (
        <div key={term} className="border-t border-white/12 pt-4">
          <dt className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{term}</dt>
          <dd className="mt-3 text-xl text-neutral-300 mob:text-lg">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

function headingId(children: HTMLAttributes<HTMLHeadingElement>['children']) {
  return Children.toArray(children)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9а-яё\s-]/gi, '')
    .replace(/\s+/g, '-')
}

const PORTFOLIO_MDX = {
  ...MDX,
  h2: ({className, children, ...props}: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={headingId(children)}
      className={`mt-28 max-w-[19ch] scroll-mt-28 break-words border-t border-white/12 pt-10 text-[clamp(3.25rem,5.4vw,6rem)] font-medium leading-[0.94] tracking-[-0.05em] text-neutral-400 mob:mt-20 mob:pt-7 mob:text-[2.625rem] mob:leading-[0.98] ${className ?? ''}`}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({className, ...props}: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={`mt-24 border-t border-white/12 pt-8 text-5xl font-medium leading-[0.96] tracking-[-0.04em] text-neutral-400 mob:mt-16 mob:pt-6 mob:text-3xl ${className ?? ''}`} {...props} />
  ),
  p: ({className, ...props}: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`my-6 max-w-[48rem] text-xl leading-[1.5] text-neutral-300 mob:my-4 mob:text-base ${className ?? ''}`} {...props} />
  ),
  ol: ({className, ...props}: HTMLAttributes<HTMLOListElement>) => (
    <ol className={`my-10 grid max-w-[72rem] list-none gap-6 md:grid-cols-2 ${className ?? ''}`} {...props} />
  ),
  li: ({className, ...props}: HTMLAttributes<HTMLLIElement>) => (
    <li className={`border-t border-white/12 pt-5 text-lg leading-[1.45] text-neutral-300 mob:text-base ${className ?? ''}`} {...props} />
  ),
}

export default async function CaseFourPage() {
  const content = await getContent()

  return (
    <>
      <ScrollProgress />

      <Container variant="default" className="space-y-24 pb-32 mob:space-y-16 mob:pb-20">
        <div className="w-full space-y-16 mob:space-y-12">
          <div className="flex justify-between font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
            {META_LABELS.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <main>
            <section className="space-y-12 mob:space-y-8">
              <div className="max-w-[82rem] space-y-8">
                <h1 className="max-w-[13ch] text-[clamp(4.5rem,8vw,9rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-neutral-400 mob:text-[3.25rem] mob:leading-[0.96]">
                  Портфолио как цифровой продукт
                </h1>

                <div className="max-w-[49rem] space-y-4 text-2xl leading-[1.35] text-neutral-400 mob:text-lg">
                  <p>Личный сайт, который помогает быстро понять мой подход, выбрать релевантный кейс и перейти от первого впечатления к содержательному разговору.</p>
                  <p className="text-neutral-500">Продукт объединяет избранные проекты, архив, подробные разборы и страницу автора в одной расширяемой системе.</p>
                </div>
              </div>

              <div className="grid grid-cols-5 divide-x divide-white/10 border-y border-white/12 max-[1100px]:grid-cols-1 max-[1100px]:divide-x-0 max-[1100px]:divide-y">
                {META_ITEMS.map((item) =>
                  item.href ? (
                    <Link key={item.label} href={item.href} className="group p-5 transition-colors duration-200 hover:bg-white/5 mob:px-0">
                      <div className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{item.label}</div>
                      <div className="mt-3 flex items-center justify-between gap-3 text-base text-neutral-200">
                        <span>{item.value}</span>
                        <span className="text-neutral-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                      </div>
                    </Link>
                  ) : (
                    <div key={item.label} className="p-5 mob:px-0">
                      <div className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{item.label}</div>
                      <div className="mt-3 text-base leading-tight text-neutral-300">{item.value}</div>
                    </div>
                  ),
                )}
              </div>
            </section>

            <article className="w-full">
              <MDXRemote source={content} components={{...PORTFOLIO_MDX, CaseScreen, PortfolioRoute, TypeSystem, TechSystem}} />
            </article>
          </main>
        </div>
      </Container>
    </>
  )
}
