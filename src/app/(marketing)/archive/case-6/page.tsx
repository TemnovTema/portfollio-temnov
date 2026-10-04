export const metadata = {
  title: 'Токсичник',
  description: 'Интерактивная цифровая инсталляция о сетевой агрессии, объектности сообщения и материальности цифрового ритуала.',
}

import path from 'path'
import fs from 'fs/promises'

import {Globe} from 'lucide-react'
import Link from 'next/link'
import {MDXRemote} from 'next-mdx-remote/rsc'

import Container from '~/Global/Container'
import {MDX} from '~/UI/MDX'
import ScrollProgress from '~~/research/ScrollProgress'

async function getContent() {
  const filePath = path.join(process.cwd(), 'src/app/(marketing)/archive/case-6/content.mdx')
  return await fs.readFile(filePath, 'utf8')
}

const META_LABELS = ['Case Study', 'Digital Installation']
const META_ITEMS = [
  {label: 'Формат', value: 'Цифровая инсталляция'},
  {label: 'Роль', value: 'Interaction design concept'},
  {label: 'Фокус', value: 'Ритуал, атмосфера, объектность'},
  {label: 'Носитель', value: 'Web experience + 3D'},
  {label: 'Сайт', value: 'Открыть сайт', href: 'https://toxichnik.vercel.app', icon: Globe},
]

export default async function CaseSixPage() {
  const content = await getContent()

  return (
    <>
      <ScrollProgress />

      <Container as="main" variant="default" className="space-y-4 pb-28 pt-8 lap:space-y-3 mob:pb-20 mob:pt-4">
        <div className="w-full space-y-6">
          <div className="flex justify-between text-sm font-medium tracking-tight uppercase text-black/85">
            {META_LABELS.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="space-y-10">
            <section className="space-y-6">
              <div className="grid grid-cols-[minmax(0,34rem)_minmax(0,1fr)] gap-x-10 gap-y-8 items-end max-[1280px]:grid-cols-1">
                <div className="max-w-[34rem] space-y-5 lap:space-y-4">
                  <h1 className="max-w-[10ch] text-5xl font-semibold tracking-tighter leading-[1.02]! text-black/88 lap:text-[2.65rem] mob:text-3xl">
                    Токсичник
                  </h1>

                  <div className="max-w-[33rem] space-y-3 text-lg leading-[1.45] text-black/58 mob:text-base">
                    <p>
                      Интерактивная цифровая инсталляция, в которой злой комментарий перестаёт быть абстрактным сообщением в интерфейсе и
                      превращается в материальный след внутри объекта.
                    </p>
                    <p>
                      Проект построен как исследовательский веб-опыт: через загрузочный ритуал, 3D-сцену, звук и сообщение пользователь
                      попадает в пространство, где агрессия рассматривается не как вспышка, а как среда, которая накапливается и живёт дальше.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 max-[740px]:grid-cols-1">
                  {META_ITEMS.map((item) => {
                    const baseCardClassName =
                      'rounded-2xl border border-black/12 bg-white/28 p-4 transition-colors duration-300 hover:bg-white/55'

                    if (item.href && item.icon) {
                      const Icon = item.icon

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          className="group col-span-2 rounded-2xl border border-black bg-black p-4 text-white transition-colors duration-300 hover:bg-black/75 max-[740px]:col-span-1"
                        >
                          <div className="text-xs font-mono uppercase text-white/55">{item.label}</div>
                          <div className="mt-3 flex items-center justify-between gap-3 text-base font-mono uppercase text-white">
                            <span>{item.value}</span>
                            <Icon className="size-[18px] text-white/70 duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" strokeWidth={1.7} />
                          </div>
                        </Link>
                      )
                    }

                    return (
                      <div key={item.label} className={baseCardClassName}>
                        <div className="text-xs font-mono uppercase text-black/46">{item.label}</div>
                        <div className="mt-3 text-base font-mono uppercase text-black/82">{item.value}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-white/30 shadow-[0_24px_80px_rgba(35,35,32,0.08)]">
                <video autoPlay muted loop playsInline className="h-auto w-full object-cover">
                  <source src="/cases/toxichnik-cover.mp4" type="video/mp4" />
                </video>
              </div>
            </section>

            <article className="max-w-[60rem] text-black/64 [&_a]:!border-black/30 [&_a]:!text-black/60 [&_em]:!text-black/46 [&_h2]:!text-black/82 [&_h3]:!text-black/78 [&_h4]:!text-black/74 [&_h5]:!text-black/70 [&_strong]:!border-black/10 [&_strong]:!bg-white/45 [&_strong]:!text-black/72">
              <MDXRemote source={content} components={MDX} />
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
