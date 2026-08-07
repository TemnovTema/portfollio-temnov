'use client'

import {ArrowLeft, ArrowRight} from 'lucide-react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import Container from '~/Global/Container'

const PROJECTS = [
  {href: '/archive/case-1', title: 'KODO. Сообщество о вайбкодинге'},
  {href: '/archive/case-2', title: 'Темпо'},
  {href: '/archive/case-3', title: 'DZEN'},
  {href: '/archive/case-4', title: 'Портфолио как цифровой продукт'},
  {href: '/archive/case-6', title: 'Токсичник'},
  {href: '/archive/case-7', title: 'PT Mono'},
  {href: '/archive/case-8', title: 'Путь самурая'},
  {href: '/archive/case-9', title: 'Веб-плакат DZEN'},
  {href: '/archive/case-10', title: 'Интерактивная веб-новелла'},
  {href: '/archive/case-11', title: 'Слушай текст'},
  {href: '/archive/case-12', title: 'Серия плакатов. Дзен'},
  {href: '/archive/case-13', title: 'KODO. Брендинг'},
  {href: '/archive/case-14', title: 'Нейросетевое затмение'},
] as const

export default function ProjectNavigation() {
  const pathname = usePathname().replace(/\/$/, '')
  const currentIndex = PROJECTS.findIndex((project) => project.href === pathname)

  if (currentIndex === -1) return null

  const previous = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length]
  const next = PROJECTS[(currentIndex + 1) % PROJECTS.length]

  return (
    <section className="border-t border-white/12 bg-black py-10 mob:py-5" aria-label="Навигация между проектами">
      <Container variant="default">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/15 mob:grid-cols-1">
          <Link
            href={previous.href}
            className="group flex min-h-[17rem] flex-col justify-between gap-10 border-r border-white/15 bg-black p-7 text-neutral-300 transition-colors duration-300 hover:bg-neutral-900 mob:min-h-[12rem] mob:border-b mob:border-r-0 mob:p-5"
            aria-label={`Предыдущий проект: ${previous.title}`}
          >
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
              Предыдущий проект
            </div>
            <h2 className="max-w-[16ch] text-[clamp(2rem,3.6vw,4rem)] font-medium leading-[0.96] tracking-[-0.05em]">
              {previous.title}
            </h2>
          </Link>

          <Link
            href={next.href}
            className="group flex min-h-[17rem] flex-col justify-between gap-10 bg-white p-7 text-black transition-colors duration-300 hover:bg-neutral-200 mob:min-h-[12rem] mob:p-5"
            aria-label={`Следующий проект: ${next.title}`}
          >
            <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.12em] text-black/55">
              Следующий проект
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </div>
            <h2 className="max-w-[16ch] text-[clamp(2rem,3.6vw,4rem)] font-medium leading-[0.96] tracking-[-0.05em]">
              {next.title}
            </h2>
          </Link>
        </div>
      </Container>
    </section>
  )
}
