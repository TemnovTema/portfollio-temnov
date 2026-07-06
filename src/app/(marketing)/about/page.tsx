export const metadata = {
  title: 'Обо мне',
  description: 'О подходе, процессе и типе продуктовых задач, с которыми я работаю.',
}

import path from 'path'
import fs from 'fs/promises'

import ScrollProgress from '~~/research/ScrollProgress'
import Content from '~~/research/Content'

async function getContent() {
  const filePath = path.join(process.cwd(), 'src/app/(marketing)/about/content.mdx')
  return await fs.readFile(filePath, 'utf8')
}

export default async function AboutPage() {
  const content = await getContent()

  return (
    <>
      <ScrollProgress />

      <Content data={content} />
    </>
  )
}
