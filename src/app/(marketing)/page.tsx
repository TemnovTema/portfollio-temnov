export const dynamic = 'auto'
export const revalidate = 43200 // 12 hours

import HomeScene from '~~/index/HomeScene'

export default function IndexPage() {
  return <HomeScene />
}
