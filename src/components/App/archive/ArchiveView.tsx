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
    <div
      className={cn(
        mode === 'folder'
          ? 'flex h-[calc(100dvh-11rem)] flex-col gap-5 overflow-hidden mob:gap-4'
          : 'space-y-6',
      )}
    >
      <section className="flex shrink-0 flex-col gap-5 xl:flex-row xl:items-end xl:justify-between mob:gap-4">
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
          className="grid min-h-0 flex-1 grid-cols-[1.08fr_0.92fr] grid-rows-[1.04fr_0.96fr] gap-4 mob:grid-cols-2 mob:grid-rows-2 mob:gap-2.5"
        >
          {ARCHIVE_FOLDERS.map((folder) => {
            const projectsCount = items.filter((item) => item.source === folder.source).length
            const cover = items.find((item) => item.source === folder.source)

            return (
              <article key={folder.source} className="group relative min-h-0 pt-3" aria-label={`${SOCIALS[folder.source]}, ${getProjectsLabel(projectsCount)}`}>
                <div
                  className="absolute left-0 top-0 h-6 w-[38%] rounded-t-[18px] border border-b-0 border-white/15 bg-black-light transition-colors duration-300 group-hover:border-white/35 group-hover:bg-black-card mob:h-5 mob:w-[48%] mob:rounded-t-xl"
                  aria-hidden="true"
                />
                <div className="relative grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] gap-3 rounded-[22px] rounded-tl-none border border-white/15 bg-black-light p-4 transition-colors duration-300 group-hover:border-white/35 group-hover:bg-black-card mob:gap-2.5 mob:rounded-2xl mob:rounded-tl-none mob:p-3">
                  <div className="flex min-w-0 items-center justify-between gap-2 overflow-hidden">
                    <div className="flex min-w-0 gap-1.5 overflow-hidden mob:gap-1">
                      {folder.tags.map((tag) => (
                        <span key={tag} className="shrink-0 rounded-full border border-white/12 px-2 py-1 font-mono text-[11px] uppercase text-neutral-400 mob:px-1 mob:py-0.5 mob:text-[8px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="shrink-0 font-mono text-xs uppercase text-neutral-500 mob:hidden">{getProjectsLabel(projectsCount)}</span>
                  </div>

                  <div className="relative min-h-0 overflow-hidden rounded-[16px] border border-dashed border-white/15 bg-black-card mob:rounded-xl">
                    {cover?.image ? (
                      <Image
                        src={cover.image}
                        alt={`Обложка категории ${SOCIALS[folder.source]}`}
                        fill
                        sizes="(max-width: 500px) 34vw, 44vw"
                        loading={folder.source === 'product' ? 'eager' : 'lazy'}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    ) : cover?.video ? (
                      <video autoPlay muted loop playsInline className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]">
                        <source src={cover.video} type="video/mp4" />
                      </video>
                    ) : null}
                  </div>

                  <div className="space-y-3 mob:space-y-2">
                    <div className="space-y-1.5 mob:space-y-0">
                      <h2
                        className={cn(
                          'text-2xl font-medium leading-none tracking-[-0.035em] text-neutral-300 transition-transform duration-300 group-hover:translate-x-1 mob:text-lg',
                          folder.source === 'research' && 'mob:text-[1rem] mob:tracking-[-0.03em]',
                        )}
                      >
                        {SOCIALS[folder.source]}
                      </h2>
                      <p className="max-w-[36ch] text-sm leading-[1.4] text-neutral-500 mob:hidden">{folder.description}</p>
                    </div>

                    <span
                      className={cn(
                        BUTTON_VARIANTS.DEFAULT,
                        BUTTON_VARIANTS.solid,
                        BUTTON_SIZES.small,
                        'pointer-events-none mob:w-full mob:px-2.5 mob:py-2 mob:text-[11px]',
                      )}
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                      Открыть
                    </span>
                  </div>
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
