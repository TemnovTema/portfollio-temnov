'use client'

import {SOCIALS, type SocialSource, type SocialsItem} from '@/app/archive/storage'
import {cn} from '@/lib/utils'

import {ArrowUpRight, FolderOpen, LayoutDashboard} from 'lucide-react'
import Image from 'next/image'
import {useState} from 'react'

import ArchiveDashboard from '~~/archive/ArchiveDashboard'
import {BUTTON_SIZES, BUTTON_VARIANTS} from '~/UI/Button'
import {H2, H4} from '~/UI/Typography'

type ArchiveMode = 'folder' | 'dashboard'

const VIEW_MODES = [
  {
    id: 'folder',
    label: 'Папочный',
    icon: FolderOpen,
  },
  {
    id: 'dashboard',
    label: 'Дашборд',
    icon: LayoutDashboard,
  },
] as const satisfies ReadonlyArray<{
  id: ArchiveMode
  label: string
  icon: typeof FolderOpen
}>

const ARCHIVE_FOLDERS: ReadonlyArray<{
  source: SocialSource
  description: string
  tags: string[]
}> = [
  {
    source: 'product',
    description: 'Продуктовые сценарии и интерфейсы',
    tags: ['UX', 'Mobile'],
  },
  {
    source: 'systems',
    description: 'Айдентика, типографика и дизайн-системы',
    tags: ['Айдентика', 'Типографика'],
  },
  {
    source: 'research',
    description: 'Эксперименты и интерактивные форматы',
    tags: ['Интерактив', '3D'],
  },
  {
    source: 'launches',
    description: 'Проекты, доведённые до работающего продукта',
    tags: ['Сообщество', 'E-commerce'],
  },
]

function getProjectsLabel(count: number) {
  return count === 1 ? '1 проект' : `${count} проекта`
}

export default function ArchiveView({items}: {items: SocialsItem[]}) {
  const [mode, setMode] = useState<ArchiveMode>('folder')

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between mob:gap-4">
        <div className="space-y-3">
          <H2>Архив</H2>
          <H4 className="max-w-[58ch] font-sans text-lg normal-case leading-[1.45] text-neutral-400 mob:max-w-[32ch] mob:text-sm">
            Четыре направления продуктовой работы в одном архиве.
          </H4>
        </div>

        <div className="inline-flex w-fit rounded-2xl border border-white/12 bg-black-light p-1">
          {VIEW_MODES.map((item) => {
            const Icon = item.icon
            const isActive = mode === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setMode(item.id)}
                className={cn(
                  'flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-sm uppercase tracking-wide transition-colors duration-300',
                  isActive ? 'bg-white text-black' : 'text-neutral-400 hover:text-white',
                )}
              >
                <Icon className="size-[17px]" strokeWidth={1.65} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      </section>

      {mode === 'folder' ? (
        <section
          data-section="archive-folders"
          aria-label="Категории проектов"
          className="grid grid-cols-2 gap-4 mob:grid-cols-1"
        >
          {ARCHIVE_FOLDERS.map((folder) => {
            const projectsCount = items.filter((item) => item.source === folder.source).length
            const cover = items.find((item) => item.source === folder.source)

            return (
              <article
                key={folder.source}
                className="group flex min-h-[34rem] flex-col gap-4 rounded-[22px] border border-white/15 bg-black-light p-4 transition-colors duration-300 hover:border-white/35 hover:bg-black-card mob:min-h-0 mob:p-3.5"
                aria-label={`${SOCIALS[folder.source]}, ${getProjectsLabel(projectsCount)}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {folder.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs uppercase text-white-dirty">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="shrink-0 font-mono text-sm uppercase text-gray">{getProjectsLabel(projectsCount)}</span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-dashed border-white/15 bg-black-card">
                  {cover?.image ? (
                    <Image
                      src={cover.image}
                      alt={`Обложка категории ${SOCIALS[folder.source]}`}
                      fill
                      sizes="(max-width: 500px) calc(100vw - 48px), 44vw"
                      loading={folder.source === 'product' ? 'eager' : 'lazy'}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  ) : cover?.video ? (
                    <video autoPlay muted loop playsInline className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]">
                      <source src={cover.video} type="video/mp4" />
                    </video>
                  ) : null}
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-medium leading-[1.12] tracking-[-0.025em] text-neutral-300 mob:text-xl">{SOCIALS[folder.source]}</h2>
                  <p className="min-h-[3rem] max-w-[54ch] text-base leading-[1.5] text-neutral-400">{folder.description}</p>
                </div>

                <div className="mt-auto">
                  <span className={cn(BUTTON_VARIANTS.DEFAULT, BUTTON_VARIANTS.solid, BUTTON_SIZES.base, 'pointer-events-none')} aria-hidden="true">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                    Открыть
                  </span>
                </div>
              </article>
            )
          })}
        </section>
      ) : (
        <ArchiveDashboard items={items} />
      )}
    </div>
  )
}
