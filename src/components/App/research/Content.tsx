import {MDXRemote} from 'next-mdx-remote/rsc'
import {cn} from '@/lib/utils'
import {Mail, Send} from 'lucide-react'
import Image from 'next/image'

import Container from '~/Global/Container'
import AnchorLinks from '~~/research/AnchorLinks'
import Button from '~/UI/Button'
import {MDX} from '~/UI/MDX'

const META_LABELS = ['About', 'Product Design']
const PHOTO_SLOTS = [
  {label: 'Портрет 01', src: '/about/artem-studio-front-v5.png'},
  {label: 'Портрет 02'},
]

export default function Content({data}: {data: string}) {
  return (
    <Container as="div" variant="default" className="space-y-4 pt-32 lap:space-y-3 mob:pt-24!">
      <div className="w-full space-y-6">
        <div className="-mx-2.5 hidden mob:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/about/artem-front-portrait.png"
              alt="Портрет Артема Темнова"
              fill
              priority
              sizes="(max-width: 500px) calc(100vw - 44px), 1px"
              className="object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#b8b8b3_0%,transparent_18%,transparent_82%,#b8b8b3_100%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,transparent_0%,rgba(184,184,179,0.25)_42%,#b8b8b3_100%)]"
            />
          </div>
        </div>

        <div className={cn('flex justify-between mob:hidden', 'text-sm font-medium tracking-tight uppercase text-black/45')}>
          {META_LABELS.map((item, index) => (
            <span key={index} className={cn('border-b border-transparent duration-200')}>
              {item}
            </span>
          ))}
        </div>

        <div className="space-y-10">
          <section className="space-y-8">
            <div className="grid grid-cols-[minmax(0,34rem)_minmax(0,1fr)] gap-x-10 gap-y-8 items-start max-[1280px]:grid-cols-1">
              <div className="max-w-[34rem] space-y-5 lap:space-y-4">
                <h1 className="max-w-[18ch] text-4xl font-semibold leading-[1.05]! tracking-tighter text-black/80 lap:text-[2.15rem] mob:text-2xl">
                  Меня зовут Артем, рад знакомству! На этой странице вся нужная информация обо мне
                </h1>

                <div className="max-w-[33rem] space-y-3 text-lg leading-[1.45] text-black/58 mob:text-base">
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
                    key={slot.label}
                    className={cn(
                      'relative aspect-[5/6] overflow-hidden rounded-xl border bg-black-card',
                      slot.src ? 'border-white/10' : 'border-dashed border-white/15',
                      'bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_45%),linear-gradient(180deg,_rgba(18,18,18,0.98),_rgba(8,8,8,1))]',
                      'max-[740px]:max-w-[24rem]',
                    )}
                  >
                    {slot.src ? (
                      <Image
                        src={slot.src}
                        alt="Студийный портрет Артема Темнова"
                        fill
                        sizes="(max-width: 1280px) 24rem, 24.5rem"
                        className="object-cover object-top grayscale"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:22px_22px]" />
                        <div className="relative z-10 flex h-full flex-col justify-between p-4">
                          <span className="text-xs font-mono uppercase text-neutral-400">{slot.label}</span>
                          <span className="text-xs font-mono uppercase text-neutral-500">Место под фото</span>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="w-full">
            <article className="max-w-[58rem] rounded-[1.6rem] border border-white/40 bg-white/18 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_1.5rem_4rem_rgba(45,45,42,0.12)] backdrop-blur-2xl [&_h2]:!text-black/80 [&_h3]:!text-black/70 [&_li]:!text-black/60 [&_p]:!text-black/60 mob:p-5">
              <MDXRemote source={data} components={MDX} />
            </article>
          </div>
        </div>
      </div>
    </Container>
  )
}
