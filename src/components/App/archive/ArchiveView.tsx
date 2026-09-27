'use client'

import {type SocialsItem} from '@/app/archive/storage'
import {cn} from '@/lib/utils'

import {AnimatePresence, motion} from 'framer-motion'
import {useMemo, useState} from 'react'

import ArchiveDashboard from '~~/archive/ArchiveDashboard'

const ARCHIVE_FILTERS = [
  {id: 'all', label: 'Все', slugs: null},
  {id: 'product', label: 'Продукты', slugs: ['case-1', 'case-2', 'case-3', 'case-4']},
  {id: 'vibecode', label: 'Веб-кодинг', slugs: ['case-6', 'case-7', 'case-8', 'case-9', 'case-10', 'case-14']},
  {id: 'graphics', label: 'Графика', slugs: ['case-2', 'case-12', 'case-13']},
  {id: 'research', label: 'Исследования', slugs: ['case-1', 'case-4', 'case-6', 'case-8', 'case-10']},
  {id: 'concepts', label: 'Концепты', slugs: ['case-1', 'case-3', 'case-11']},
] as const

type ArchiveFilter = (typeof ARCHIVE_FILTERS)[number]['id']

export default function ArchiveView({items}: {items: SocialsItem[]}) {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>('all')
  const filteredItems = useMemo(() => {
    const filter = ARCHIVE_FILTERS.find((item) => item.id === activeFilter)
    if (!filter || filter.slugs === null) return items
    return items.filter((item) => (filter.slugs as readonly string[]).includes(item.slug))
  }, [activeFilter, items])

  return (
    <div className="mx-auto max-w-[88rem] space-y-4">
      <nav aria-label="Фильтры архива" className="flex justify-center mob:justify-start">
        <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/50 bg-white/14 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(255,255,255,0.14),0_1rem_3rem_rgba(45,45,42,0.12)] backdrop-blur-[28px] backdrop-saturate-[1.35] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ARCHIVE_FILTERS.map((filter) => {
            const isActive = filter.id === activeFilter

            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  'relative shrink-0 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 active:scale-[0.98] mob:px-3 mob:py-1.5 mob:text-xs',
                  isActive ? 'text-white' : 'border border-transparent text-black/55 hover:border-white/35 hover:bg-white/24 hover:text-black/85',
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="archive-filter"
                    className="absolute inset-0 -z-10 rounded-full border border-white/36 bg-black/42 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(255,255,255,0.08),0_0.5rem_1.4rem_rgba(30,30,28,0.14)] backdrop-blur-2xl"
                    transition={{type: 'spring', stiffness: 380, damping: 32}}
                  />
                ) : null}
                {filter.label}
              </button>
            )
          })}
        </div>
      </nav>

      <AnimatePresence mode="popLayout" initial={false}>
        <ArchiveDashboard key={activeFilter} items={filteredItems} />
      </AnimatePresence>
    </div>
  )
}
