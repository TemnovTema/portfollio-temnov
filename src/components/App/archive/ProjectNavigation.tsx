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
    <section className="border-t border-black/10 bg-[#e7e7e2] py-10 mob:py-6" aria-label="Навигация между проектами">
      <Container variant="default">
        <nav className="grid grid-cols-2 gap-3 mob:grid-cols-1" aria-label="Перейти к соседнему проекту">
          <Link
            href={previous.href}
            className="group flex min-h-24 items-center gap-4 rounded-full border border-black/12 bg-white/30 px-6 py-4 text-black/80 transition-[background-color,transform] duration-300 hover:bg-white/65 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mob:min-h-20 mob:px-5"
            aria-label={`Предыдущий проект: ${previous.title}`}
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-black/12 bg-white/45 mob:size-10">
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
            </span>
            <div className="min-w-0">
              <div className="font-mono text-[0.64rem] uppercase tracking-[0.1em] text-black/42">Предыдущий проект</div>
              <div className="mt-1 truncate text-lg font-medium tracking-[-0.025em] mob:text-base">{previous.title}</div>
            </div>
          </Link>

          <Link
            href={next.href}
            className="group flex min-h-24 items-center justify-end gap-4 rounded-full border border-black/12 bg-white/30 px-6 py-4 text-right text-black/80 transition-[background-color,transform] duration-300 hover:bg-white/65 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mob:min-h-20 mob:px-5"
            aria-label={`Следующий проект: ${next.title}`}
          >
            <div className="min-w-0">
              <div className="font-mono text-[0.64rem] uppercase tracking-[0.1em] text-black/42">Следующий проект</div>
              <div className="mt-1 truncate text-lg font-medium tracking-[-0.025em] mob:text-base">{next.title}</div>
            </div>
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-black text-white mob:size-10">
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </span>
          </Link>
        </nav>
      </Container>
    </section>
  )
}
