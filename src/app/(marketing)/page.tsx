export const dynamic = 'auto'
export const revalidate = 43200 // 12 hours

import Container from '~/Global/Container'

import Hero from '~~/index/Hero'
import Highlights from '~~/index/Highlights'
import Closing from '~~/teaser/Launch'

export default function IndexPage() {
  return (
    <Container variant="default" className="space-y-24 pb-40 mob:pt-0">
      <Hero />
      <Highlights />
      <Closing />
    </Container>
  )
}
