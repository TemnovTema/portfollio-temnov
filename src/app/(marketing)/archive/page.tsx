export const metadata = {
  title: 'Архив',
  description: 'Выбранные направления работы: графика, системы, исследования и концепты.',
}

import {ITEMS} from '@/app/archive/storage'

import Container from '~/Global/Container'
import ArchiveView from '~~/archive/ArchiveView'

export default function ArchivePage() {
  return (
    <Container variant="default" className="space-y-8 mob:space-y-8">
      <ArchiveView items={ITEMS} />
    </Container>
  )
}
