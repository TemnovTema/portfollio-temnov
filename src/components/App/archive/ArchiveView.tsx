'use client'

import {SOCIALS, type SocialSource, type SocialsItem} from '@/app/archive/storage'
import {cn} from '@/lib/utils'

import {ArrowRight, ArrowUpRight, FolderOpen, LayoutDashboard} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
  title?: string
  description: string
  tags: string[]
  href?: string
  projectSlugs?: string[]
}> = [
  {
    source: 'product',
    description: 'Продуктовые сценарии и интерфейсы',
    tags: ['UX', 'Mobile'],
  },
  {
    source: 'systems',
    title: 'VibeCode',
    description: 'Веб-эксперименты, интерактивные истории и учебные проекты',
    tags: ['Эксперименты', 'Web'],
    href: '/archive/vibecode',
    projectSlugs: ['case-6', 'case-7', 'case-8', 'case-9', 'case-10'],
  },
  {
    source: 'research',
    description: 'Эксперименты и интерактивные форматы',
    tags: ['Интерактив', '3D'],
  },
  {
    source: 'launches',
    title: 'Концепты',
    description: 'Учебные идеи, ранние продукты и проекты в стадии концепции',
    tags: ['Идеи', 'Учебные'],
    href: '/archive/concepts',
    projectSlugs: ['case-1', 'case-3', 'case-11'],
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
            const folderItems = folder.projectSlugs ? items.filter((item) => folder.projectSlugs?.includes(item.slug)) : items.filter((item) => item.source === folder.source)
            const projectsCount = folderItems.length
            const cover = folderItems[0]
            const folderTitle = folder.title ?? SOCIALS[folder.source]

            return (
              <article
                key={folder.source}
                className="group relative flex min-h-[34rem] flex-col gap-4 rounded-[22px] border border-white/15 bg-black-light p-4 transition-colors duration-300 hover:border-white/35 hover:bg-black-card mob:min-h-0 mob:p-3.5"
                aria-label={`${folderTitle}, ${getProjectsLabel(projectsCount)}`}
              >
                {folder.href && <Link href={folder.href} className="absolute inset-0 z-20 rounded-[22px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" aria-label={`Открыть папку ${folderTitle}`} />}

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
                      alt={`Обложка категории ${folderTitle}`}
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
                  <h2 className="text-2xl font-medium leading-[1.12] tracking-[-0.025em] text-neutral-300 mob:text-xl">{folderTitle}</h2>
                  <p className="min-h-[3rem] max-w-[54ch] text-base leading-[1.5] text-neutral-400">{folder.description}</p>
                </div>

                <div className="mt-auto">
                  <span className={cn(BUTTON_VARIANTS.DEFAULT, BUTTON_VARIANTS.solid, BUTTON_SIZES.base, 'pointer-events-none group-hover:bg-white/80')} aria-hidden="true">
                    <span className="relative size-5">
                      <ArrowRight className="absolute inset-0 size-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-0" strokeWidth={1.5} />
                      <ArrowUpRight className="absolute inset-0 size-5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" strokeWidth={1.5} />
                    </span>
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
