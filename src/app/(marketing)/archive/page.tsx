export const metadata = {
  title: 'Архив',
  description: 'Выбранные направления работы: графика, системы, исследования и концепты.',
}

import {ITEMS} from '@/app/archive/storage'

import Container from '~/Global/Container'
import ArchiveView from '~~/archive/ArchiveView'
import {ContactComposer, StageBackdrop} from '~~/index/HomeScene'

export default function ArchivePage() {
  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-[#b8b8b3] text-[#181817]">
      <StageBackdrop fixed />
      <Container as="div" variant="default" className="relative z-20 pb-40 pt-32 mob:pb-36 mob:pt-24">
        <ArchiveView items={ITEMS} />
      </Container>
      <div className="fixed inset-x-0 bottom-0 z-50 px-6 pb-6 mob:px-3 mob:pb-3">
        <ContactComposer />
      </div>
    </main>
  )
}
