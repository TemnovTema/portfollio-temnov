import type {SocialSource} from '@/app/archive/storage'

import {cn} from '@/lib/utils'
import {Compass, FolderKanban, Rocket, SwatchBook} from 'lucide-react'

const icons: Record<SocialSource, typeof FolderKanban> = {
  product: FolderKanban,
  systems: SwatchBook,
  research: Compass,
  launches: Rocket,
}

type Props = {
  source: SocialSource
  mode?: 'dark' | 'light'
  className?: string
}

export default function SocialsIcon({source, mode = 'dark', className}: Props) {
  const Icon = icons[source]
  if (!Icon) return null

  return (
    <div className={cn('grid place-items-center size-5 mob:size-6', className)}>
      <Icon className={cn(mode === 'light' ? 'text-white-dirty' : 'text-black', 'size-[18px]')} strokeWidth={1.65} />
    </div>
  )
}
