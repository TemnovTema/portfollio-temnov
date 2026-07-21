import {MDXRemote} from 'next-mdx-remote/rsc'
import {cn} from '@/lib/utils'
import {Mail, Send} from 'lucide-react'
import Image from 'next/image'

import Container from '~/Global/Container'
import AnchorLinks from '~~/research/AnchorLinks'
import Button from '~/UI/Button'
import {MDX} from '~/UI/MDX'

const META_LABELS = ['About', 'Product Design']
const PHOTO_SLOTS = ['Портрет 01', 'Портрет 02']

export default function Content({data}: {data: string}) {
  return (
    <Container variant="default" className="space-y-4 lap:space-y-3 mob:pt-24!">
      <div className="w-full space-y-6">
        <div className="-mx-2.5 hidden mob:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/about/about-profile-placeholder.png"
              alt="Временный портрет для страницы обо мне"
              fill
              priority
              sizes="(max-width: 500px) calc(100vw - 44px), 1px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className={cn('flex justify-between mob:hidden', 'text-sm font-medium tracking-tight uppercase text-neutral-300')}>
          {META_LABELS.map((item, index) => (
            <span key={index} className={cn('border-b border-transparent duration-200')}>
              {item}
            </span>
          ))}
        </div>

        <main className="space-y-10">
          <section className="space-y-8">
            <div className="grid grid-cols-[minmax(0,34rem)_minmax(0,1fr)] gap-x-10 gap-y-8 items-start max-[1280px]:grid-cols-1">
              <div className="max-w-[34rem] space-y-5 lap:space-y-4">
                <h1 className="text-4xl font-semibold tracking-tighter leading-[1.05]! lap:text-[2.15rem] mob:text-2xl text-neutral-500 max-w-[18ch]">
                  Меня зовут Артем, рад знакомству! На этой странице вся нужная информация обо мне
                </h1>

                <div className="max-w-[33rem] space-y-3 text-lg leading-[1.45] text-neutral-400 mob:text-base">
                  <p>Работаю на стыке продуктового мышления, UX и системности: помогаю командам упрощать сложные сценарии и делать интерфейс собраннее.</p>
                  <p>Ближе всего мне задачи, где нужно не просто оформить экран, а привести в порядок структуру, поведение и общую логику продукта.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    to="https://t.me/absolutnoretro"
                    target="_blank"
                    size="small"
                    icon={<Send className="duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />}
                    text="Написать в Telegram"
                  />
                  <Button
                    to="mailto:treywas2001@gmail.com"
                    variant="outline"
                    size="small"
                    icon={<Mail className="duration-300 group-hover:scale-[1.06]" strokeWidth={1.6} />}
                    text="Написать на почту"
                  />
                </div>

                <AnchorLinks />
              </div>

              <div className="grid w-full max-w-[49rem] grid-cols-2 gap-4 justify-self-end self-start max-[1280px]:justify-self-start max-[740px]:grid-cols-1 mob:hidden">
                {PHOTO_SLOTS.map((slot) => (
                  <div
                    key={slot}
                    className={cn(
                      'relative aspect-[5/6] overflow-hidden rounded-xl border border-dashed border-white/15 bg-black-card',
                      'bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_45%),linear-gradient(180deg,_rgba(18,18,18,0.98),_rgba(8,8,8,1))]',
                      'max-[740px]:max-w-[24rem]',
                    )}
                  >
                    <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:22px_22px]" />
                    <div className="relative z-10 flex h-full flex-col justify-between p-4">
                      <span className="text-xs font-mono uppercase text-neutral-400">{slot}</span>
                      <span className="text-xs font-mono uppercase text-neutral-500">Место под фото</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="w-full">
            <article className="max-w-[58rem]">
              <MDXRemote source={data} components={MDX} />
            </article>
          </div>
        </main>
      </div>
    </Container>
  )
}
