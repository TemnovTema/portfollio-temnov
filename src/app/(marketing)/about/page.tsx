export const metadata = {
  title: 'Обо мне',
  description: 'О подходе, процессе и типе продуктовых задач, с которыми я работаю.',
}

import path from 'path'
import fs from 'fs/promises'

import ScrollProgress from '~~/research/ScrollProgress'
import Content from '~~/research/Content'
import {ContactComposer, StageBackdrop} from '~~/index/HomeScene'

async function getContent() {
  const filePath = path.join(process.cwd(), 'src/app/(marketing)/about/content.mdx')
  return await fs.readFile(filePath, 'utf8')
}

export default async function AboutPage() {
  const content = await getContent()

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-[#b8b8b3] text-[#181817]">
      <StageBackdrop fixed />
      <ScrollProgress />
      <div className="relative z-20 pb-36">
        <Content data={content} />
      </div>
      <div className="fixed inset-x-0 bottom-0 z-50 px-6 pb-6 mob:px-3 mob:pb-3">
        <ContactComposer />
      </div>
    </main>
  )
}
