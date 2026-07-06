'use client'

import type {SocialsItem} from '@/app/archive/storage'
import {cn} from '@/lib/utils'

import {FolderOpen, LayoutDashboard} from 'lucide-react'
import {useState} from 'react'

import SocialsCard from '~~/socials/SocialsCard'
import SocialsGroup from '~~/socials/SocialsGroup'
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

export default function ArchiveView({items}: {items: SocialsItem[]}) {
  const [mode, setMode] = useState<ArchiveMode>('folder')

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="space-y-3">
          <H2>Архив</H2>
          <H4 className="max-w-[72ch]">Подборка направлений и форматов работы: от сложных продуктовых сценариев и системных интерфейсов до исследований и подготовленных к запуску решений.</H4>
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
        <>
          <SocialsGroup />

          <section data-section="archive-grid" className="space-y-4">
            {items.map((item) => (
              <SocialsCard item={item} key={item.slug} />
            ))}
          </section>
        </>
      ) : (
        <ArchiveDashboard items={items} />
      )}
    </div>
  )
}
