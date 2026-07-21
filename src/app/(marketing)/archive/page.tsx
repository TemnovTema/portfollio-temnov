export const metadata = {
  title: 'Архив',
  description: 'Выбранные направления продуктовой работы: сценарии, системы, исследования и запуски.',
}

import {ITEMS} from '@/app/archive/storage'

import Container from '~/Global/Container'
import ArchiveView from '~~/archive/ArchiveView'

export default function ArchivePage() {
  return (
    <Container variant="default" className="space-y-8 pb-4 mob:space-y-8 mob:pb-4">
      <ArchiveView items={ITEMS} />
    </Container>
  )
}
