export const metadata = {
  title: 'Dzen: интернет-магазин стритвир-бренда',
  description: 'Продуктовый кейс интернет-магазина Dzen: арт-дирекшн, каталог, карточка товара и путь к покупке.',
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
  const filePath = path.join(process.cwd(), 'src/app/(marketing)/archive/case-3/content.mdx')
  return await fs.readFile(filePath, 'utf8')
}

const META_LABELS = ['Case Study', 'E-commerce']
const META_ITEMS = [
  {label: 'Формат', value: 'Интернет-магазин'},
  {label: 'Роль', value: 'Продуктовый дизайн'},
  {label: 'Фокус', value: 'Арт-дирекшн, каталог, покупка'},
  {label: 'Продукт', value: 'Dzen'},
  {label: 'Сайт', value: 'Открыть Dzen', href: 'https://dzen-iota.vercel.app/home.html'},
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

function headingId(children: HTMLAttributes<HTMLHeadingElement>['children']) {
  return Children.toArray(children)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9а-яё\s-]/gi, '')
    .replace(/\s+/g, '-')
}

const DZEN_MDX = {
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
  p: ({className, ...props}: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`my-6 max-w-[48rem] text-xl leading-[1.5] text-neutral-300 mob:my-4 mob:text-base ${className ?? ''}`} {...props} />
  ),
  ol: ({className, ...props}: HTMLAttributes<HTMLOListElement>) => (
    <ol className={`my-10 grid max-w-[68rem] list-none gap-6 md:grid-cols-2 ${className ?? ''}`} {...props} />
  ),
  li: ({className, ...props}: HTMLAttributes<HTMLLIElement>) => (
    <li className={`border-t border-white/12 pt-5 text-lg leading-[1.45] text-neutral-300 mob:text-base ${className ?? ''}`} {...props} />
  ),
}

export default async function CaseThreePage() {
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
                <h1 className="max-w-[14ch] text-[clamp(4.5rem,8vw,9rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-neutral-400 mob:text-[3.25rem] mob:leading-[0.96]">
                  Dzen: интернет-магазин уличной одежды
                </h1>

                <div className="max-w-[49rem] space-y-4 text-2xl leading-[1.35] text-neutral-400 mob:text-lg">
                  <p>Цифровая витрина стритвир-бренда, где коллекции, каталог и карточки товаров собраны в единый путь к покупке.</p>
                  <p className="text-neutral-500">Выразительная арт-дирекция создаёт атмосферу, а понятная коммерческая структура помогает быстро выбрать вещь, размер и перейти в корзину.</p>
                </div>
              </div>

              <div className="grid grid-cols-5 divide-x divide-white/10 border-y border-white/12 max-[1100px]:grid-cols-1 max-[1100px]:divide-x-0 max-[1100px]:divide-y">
                {META_ITEMS.map((item) =>
                  item.href ? (
                    <Link key={item.label} href={item.href} target="_blank" className="group p-5 transition-colors duration-200 hover:bg-white/5 mob:px-0">
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
              <MDXRemote source={content} components={{...DZEN_MDX, CaseScreen}} />
            </article>
          </main>
        </div>
      </Container>
    </>
  )
}

