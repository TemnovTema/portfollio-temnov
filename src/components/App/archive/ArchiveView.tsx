'use client'

import {SOCIALS, type SocialSource, type SocialsItem} from '@/app/archive/storage'
import {cn} from '@/lib/utils'

import {FolderOpen, LayoutDashboard} from 'lucide-react'
import {useState} from 'react'

import ArchiveDashboard from '~~/archive/ArchiveDashboard'
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
}> = [
  {
    source: 'product',
    description: 'Продуктовые сценарии и интерфейсы',
  },
  {
    source: 'systems',
    description: 'Айдентика, типографика и дизайн-системы',
  },
  {
    source: 'research',
    description: 'Эксперименты и интерактивные форматы',
  },
  {
    source: 'launches',
    description: 'Проекты, доведённые до работающего продукта',
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

            return (
              <article key={folder.source} className="relative min-h-0 pt-3" aria-label={`${SOCIALS[folder.source]}, ${getProjectsLabel(projectsCount)}`}>
                <div className="absolute left-0 top-0 h-6 w-[38%] rounded-t-[18px] border border-b-0 border-white/15 bg-black-light mob:h-5 mob:w-[48%] mob:rounded-t-xl" aria-hidden="true" />
                <div className="relative flex h-full min-h-0 flex-col rounded-[22px] rounded-tl-none border border-white/15 bg-black-light p-6 mob:rounded-2xl mob:rounded-tl-none mob:p-3.5">
                  <span className="font-mono text-sm uppercase tracking-wide text-neutral-500 mob:text-[11px]">{getProjectsLabel(projectsCount)}</span>

                  <div className="mt-auto space-y-2.5 mob:space-y-0">
                    <h2
                      className={cn(
                        'text-[clamp(1.8rem,3.4vw,3.75rem)] font-medium leading-[0.95] tracking-[-0.045em] text-neutral-300 mob:leading-none',
                        folder.source === 'research' ? 'mob:text-[1.05rem] mob:tracking-[-0.035em]' : 'mob:text-[1.35rem]',
                      )}
                    >
                      {SOCIALS[folder.source]}
                    </h2>
                    <p className="max-w-[32ch] text-base leading-[1.4] text-neutral-500 mob:hidden">{folder.description}</p>
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
