export const metadata = {
  title: 'KODO: сообщество о вайбкодинге и AI-разработке',
  description: 'Продуктовый кейс KODO: онлайн-сообщество с публикациями, библиотекой ресурсов и Prompt Lab.',
}

import path from 'path'
import fs from 'fs/promises'

import Image from 'next/image'
import Link from 'next/link'
import {Children, type HTMLAttributes} from 'react'

import Container from '~/Global/Container'
import ScrollProgress from '~~/research/ScrollProgress'
import {MDX} from '~/UI/MDX'
import {MDXRemote} from 'next-mdx-remote/rsc'

async function getContent() {
  const filePath = path.join(process.cwd(), 'src/app/(marketing)/archive/case-1/content.mdx')
  return await fs.readFile(filePath, 'utf8')
}

const META_LABELS = ['Case Study', 'Community Product']
type MetaItem = {
  label: string
  value: string
  href?: string
  icon?: 'notion'
}

const META_ITEMS: MetaItem[] = [
  {label: 'Формат', value: 'Сообщество + инструменты'},
  {label: 'Роль', value: 'Продуктовый дизайн'},
  {label: 'Фокус', value: 'Структура, сценарии, UI'},
  {label: 'Продукт', value: 'KODO'},
  {label: 'Сайт', value: 'Открыть KODO', href: 'https://kodo-media.vercel.app/profile'},
  {
    label: 'PRD',
    value: 'Product Requirements Document',
    href: 'https://app.notion.com/p/3a76ff52ef1080ea972ccda39aea5d9b',
    icon: 'notion',
  },
]

const PRODUCT_CYCLE = ['Нахожу', 'Обсуждаю', 'Сохраняю', 'Использую', 'Публикую']

function ProductCycle() {
  return (
    <figure className="my-16 border-y border-white/12 py-9 mob:my-12 mob:py-7" aria-label="Концептуальная схема основного цикла KODO">
      <figcaption className="mb-7 font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">Основной цикл KODO</figcaption>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-4 text-2xl leading-tight text-neutral-200 mob:text-lg">
        {PRODUCT_CYCLE.map((step, index) => (
          <div key={step} className="flex items-center gap-4">
            <span>{step}</span>
            {index < PRODUCT_CYCLE.length - 1 && <span className="text-neutral-600" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
    </figure>
  )
}

function CaseScreen({src, alt, caption}: {src: string; alt: string; caption: string}) {
  return (
    <figure className="my-20 mob:my-12">
      <div className="overflow-hidden rounded-[28px] border border-white/12 bg-black-light mob:rounded-2xl">
        <Image src={src} alt={alt} width={1440} height={812} className="h-auto w-full" />
      </div>
      <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{caption}</figcaption>
    </figure>
  )
}

function BrandScreen() {
  return (
    <figure className="my-20 mob:my-12">
      <div className="overflow-hidden rounded-[28px] border border-white/12 bg-black-light mob:rounded-2xl">
        <Image src="/cases/kodo-case-cover.jpg" alt="Логотип, графика и интерфейс KODO" width={2400} height={1530} className="h-auto w-full" />
      </div>
      <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">Логотип, айдентика и интерфейс продукта</figcaption>
    </figure>
  )
}

function headingId(children: HTMLAttributes<HTMLHeadingElement>['children']) {
  return Children.toArray(children)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9а-яё\s-]/gi, '')
    .replace(/\s+/g, '-')
}

const KODO_MDX = {
  ...MDX,
  h2: ({className, children, ...props}: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={headingId(children)}
      className={`mt-28 max-w-[19ch] scroll-mt-28 border-t border-white/12 pt-10 text-[clamp(3.25rem,5.4vw,6rem)] font-medium leading-[0.94] tracking-[-0.05em] text-neutral-400 mob:mt-20 mob:pt-7 ${className ?? ''}`}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({className, ...props}: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={`mt-24 border-t border-white/12 pt-8 text-5xl font-medium leading-[0.96] tracking-[-0.04em] text-neutral-400 mob:mt-16 mob:pt-6 mob:text-3xl ${className ?? ''}`} {...props} />
  ),
  h4: ({className, ...props}: HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className={`mt-14 text-2xl font-medium tracking-tight text-neutral-500 mob:mt-10 mob:text-xl ${className ?? ''}`} {...props} />
  ),
  p: ({className, ...props}: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`my-6 max-w-[48rem] text-xl leading-[1.5] text-neutral-300 mob:my-4 mob:text-base ${className ?? ''}`} {...props} />
  ),
  ol: ({className, ...props}: HTMLAttributes<HTMLOListElement>) => (
    <ol className={`my-8 grid max-w-[64rem] list-none gap-6 md:grid-cols-2 ${className ?? ''}`} {...props} />
  ),
  li: ({className, ...props}: HTMLAttributes<HTMLLIElement>) => (
    <li className={`border-t border-white/12 pt-5 text-lg leading-[1.45] text-neutral-300 mob:text-base ${className ?? ''}`} {...props} />
  ),
}

export default async function CaseOnePage() {
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
              <div className="max-w-[78rem] space-y-8">
                <h1 className="max-w-[15ch] text-[clamp(4.5rem,8vw,9rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-neutral-400 mob:text-[3.25rem] mob:leading-[0.96]">
                  KODO: сообщество о вайбкодинге и AI-разработке
                </h1>

                <div className="max-w-[49rem] space-y-4 text-2xl leading-[1.35] text-neutral-400 mob:text-lg">
                  <p>Пользователи публикуют статьи и посты, обсуждают AI, делятся полезными ресурсами и находят инструменты для работы.</p>
                  <p className="text-neutral-500">В библиотеке собраны skills, шаблоны, дизайн-системы, гайды и открытые курсы. Prompt Lab помогает структурировать задачу и улучшить промпт.</p>
                </div>
              </div>

              <div className="grid grid-cols-6 divide-x divide-white/10 border-y border-white/12 max-[1280px]:grid-cols-3 max-[1280px]:divide-x-0 max-[1280px]:divide-y max-[760px]:grid-cols-1">
                {META_ITEMS.map((item) =>
                  item.href ? (
                    <Link key={item.label} href={item.href} target="_blank" rel="noreferrer" className="group p-5 transition-colors duration-200 hover:bg-white/5 mob:px-0">
                      <div className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{item.label}</div>
                      <div className="mt-3 flex items-center justify-between gap-3 text-base text-neutral-200">
                        <span className="flex items-center gap-2 leading-tight">
                          {item.icon === 'notion' && <Image src="/icons/notion.png" alt="" width={18} height={18} className="size-[18px] shrink-0 rounded-[3px]" />}
                          {item.value}
                        </span>
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
              <MDXRemote source={content} components={{...KODO_MDX, ProductCycle, CaseScreen, BrandScreen}} />
            </article>
          </main>
        </div>
      </Container>
    </>
  )
}
