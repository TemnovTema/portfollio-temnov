export const metadata = {
  title: 'KODO — сообщество о вайбкодинге и AI-разработке',
  description: 'Продуктовый кейс KODO: онлайн-сообщество с публикациями, библиотекой ресурсов и Prompt Lab.',
}

import path from 'path'
import fs from 'fs/promises'

import Image from 'next/image'
import Link from 'next/link'
import {Globe} from 'lucide-react'

import Container from '~/Global/Container'
import ScrollProgress from '~~/research/ScrollProgress'
import {MDX} from '~/UI/MDX'
import {MDXRemote} from 'next-mdx-remote/rsc'

async function getContent() {
  const filePath = path.join(process.cwd(), 'src/app/(marketing)/archive/case-1/content.mdx')
  return await fs.readFile(filePath, 'utf8')
}

const META_LABELS = ['Case Study', 'Community Product']
const META_ITEMS = [
  {label: 'Формат', value: 'Сообщество + инструменты'},
  {label: 'Роль', value: 'Продуктовый дизайн'},
  {label: 'Фокус', value: 'Структура, сценарии, UI'},
  {label: 'Продукт', value: 'KODO'},
  {label: 'Сайт', value: 'Открыть KODO', href: 'https://kodo-media.vercel.app/profile', icon: Globe},
]

const PRODUCT_CYCLE = ['Нахожу', 'Обсуждаю', 'Сохраняю', 'Использую', 'Публикую']

function ProductCycle() {
  return (
    <figure className="my-10 border-y border-white/12 py-6" aria-label="Концептуальная схема основного цикла KODO">
      <figcaption className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">Основной цикл KODO</figcaption>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-lg text-neutral-200 mob:text-base">
        {PRODUCT_CYCLE.map((step, index) => (
          <div key={step} className="flex items-center gap-3">
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
    <figure className="my-10">
      <div className="overflow-hidden rounded-2xl border border-white/12 bg-black-light">
        <Image src={src} alt={alt} width={1440} height={812} className="h-auto w-full" />
      </div>
      <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{caption}</figcaption>
    </figure>
  )
}

function BrandScreen() {
  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-2xl border border-white/12 bg-black-light">
        <Image src="/cases/kodo-case-cover.jpg" alt="Логотип, графика и интерфейс KODO" width={2400} height={1530} className="h-auto w-full" />
      </div>
      <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">Логотип, айдентика и интерфейс продукта</figcaption>
    </figure>
  )
}

export default async function CaseOnePage() {
  const content = await getContent()

  return (
    <>
      <ScrollProgress />

      <Container variant="default" className="space-y-4 lap:space-y-3">
        <div className="w-full space-y-6">
          <div className="flex justify-between text-sm font-medium tracking-tight uppercase text-neutral-300">
            {META_LABELS.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <main className="space-y-10">
            <section className="space-y-6">
              <div className="grid grid-cols-[minmax(0,34rem)_minmax(0,1fr)] gap-x-10 gap-y-8 items-end max-[1280px]:grid-cols-1">
                <div className="max-w-[34rem] space-y-5 lap:space-y-4">
                  <h1 className="max-w-[16ch] text-5xl font-semibold tracking-tighter leading-[1.02]! text-balance text-neutral-500 lap:text-[2.65rem] mob:text-3xl">
                    KODO — сообщество о вайбкодинге и AI-разработке
                  </h1>

                  <div className="max-w-[33rem] space-y-3 text-lg leading-[1.45] text-neutral-400 mob:text-base">
                    <p>
                      Пользователи публикуют статьи и посты, обсуждают AI, делятся полезными ресурсами и находят инструменты для работы.
                    </p>
                    <p>
                      В библиотеке собраны skills, шаблоны, дизайн-системы, гайды и открытые курсы. Prompt Lab помогает структурировать задачу и улучшить промпт.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 max-[740px]:grid-cols-1">
                  {META_ITEMS.map((item) => {
                    const baseCardClassName =
                      'rounded-xl border border-white/12 bg-black-card p-4 transition-colors duration-300 hover:border-white/25 hover:bg-black-light'

                    if (item.href && item.icon) {
                      const Icon = item.icon

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          className="group col-span-2 rounded-xl border border-white bg-white p-4 text-black transition-colors duration-300 hover:border-white/80 hover:bg-white/85 max-[740px]:col-span-1"
                        >
                          <div className="text-xs font-mono uppercase text-black/55">{item.label}</div>
                          <div className="mt-3 flex items-center justify-between gap-3 text-base font-mono uppercase text-black">
                            <span>{item.value}</span>
                            <Icon className="size-[18px] text-black/70 duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" strokeWidth={1.7} />
                          </div>
                        </Link>
                      )
                    }

                    return (
                      <div key={item.label} className={baseCardClassName}>
                        <div className="text-xs font-mono uppercase text-neutral-500">{item.label}</div>
                        <div className="mt-3 text-base font-mono uppercase text-neutral-200">{item.value}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

            </section>

            <article className="max-w-[60rem]">
              <MDXRemote source={content} components={{...MDX, ProductCycle, CaseScreen, BrandScreen}} />
            </article>
          </main>
        </div>
      </Container>
    </>
  )
}
