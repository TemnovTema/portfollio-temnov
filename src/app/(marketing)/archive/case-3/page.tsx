export const metadata = {
  title: 'DZEN: интернет-магазин уличной одежды',
  description: 'Продуктовый кейс интернет-магазина DZEN: арт-дирекшн, каталог, карточка товара и путь к покупке.',
}

import Image from 'next/image'
import Link from 'next/link'
import {ArrowUpRight} from 'lucide-react'

import {cn} from '@/lib/utils'
import Container from '~/Global/Container'
import ScrollProgress from '~~/research/ScrollProgress'
import {BUTTON_SIZES, BUTTON_VARIANTS} from '~/UI/Button'

const SITE_URL = 'https://dzen-iota.vercel.app/home.html'
const TAGS = ['E-commerce', 'Art Direction', 'UX/UI', 'Web']
const META = [
  {label: 'Формат', value: 'Интерактивный веб-прототип'},
  {label: 'Роль', value: 'Продуктовый дизайн и арт-дирекшн'},
  {label: 'Фокус', value: 'Каталог, карточка товара, покупка'},
]
const PIPELINE = [
  {title: 'Задать атмосферу', text: 'Сформировал арт-дирекшн цифровой витрины.', color: 'bg-[#526cf6]'},
  {title: 'Развести сценарии', text: 'Отделил эмоциональное знакомство от рабочего выбора.', color: 'bg-[#d6d9e0]'},
  {title: 'Собрать магазин', text: 'Спроектировал главную, каталог, товар и корзину.', color: 'bg-[#526cf6]'},
  {title: 'Удержать систему', text: 'Сохранил один визуальный язык на всём пути.', color: 'bg-[#f0f0ec]'},
]

function Visual({src, alt, className, imageClassName}: {src: string; alt: string; className?: string; imageClassName?: string}) {
  return (
    <figure className={cn('group relative overflow-hidden rounded-[28px] bg-[#111] mob:rounded-2xl', className)}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 90vw" className={cn('object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]', imageClassName)} />
    </figure>
  )
}

function Label({children, dark = false}: {children: React.ReactNode; dark?: boolean}) {
  return <p className={cn('font-mono text-xs uppercase tracking-[0.14em]', dark ? 'text-black/55' : 'text-neutral-500')}>{children}</p>
}

export default function DzenCasePage() {
  return (
    <>
      <ScrollProgress />
      <main className="overflow-hidden">
        <Container variant="default">
          <section className="flex min-h-[calc(100dvh-7rem)] flex-col justify-between gap-12 pb-16 pt-10 mob:min-h-0 mob:pb-12 mob:pt-5">
            <div className="flex items-start justify-between gap-6 mob:flex-col">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Продуктовый кейс</span>
              <div className="flex flex-wrap justify-end gap-2 mob:justify-start">
                {TAGS.map((tag) => <span key={tag} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-xs uppercase text-neutral-400">{tag}</span>)}
              </div>
            </div>

            <div className="grid items-end gap-10 lg:grid-cols-[1fr_24rem]">
              <div>
                <h1 className="text-[clamp(6rem,18vw,17rem)] font-semibold leading-[0.74] tracking-[-0.09em] text-neutral-300 mob:text-[21vw]">DZEN</h1>
                <p className="mt-12 max-w-[27ch] text-[clamp(1.65rem,3vw,3.25rem)] leading-[1.08] tracking-[-0.04em] text-neutral-300 mob:mt-8 mob:text-2xl">
                  Интернет-магазин уличной одежды.
                </p>
              </div>
              <div className="space-y-7">
                <p className="max-w-[34ch] text-lg leading-[1.45] text-neutral-400">Цифровая витрина, где атмосфера коллекции не мешает быстро выбрать вещь и размер.</p>
                <Link href={SITE_URL} target="_blank" rel="noreferrer" className={cn(BUTTON_VARIANTS.DEFAULT, BUTTON_VARIANTS.solid, BUTTON_SIZES.base, 'group w-full whitespace-nowrap')}>
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:rotate-12" strokeWidth={1.5} />
                  Открыть DZEN
                </Link>
              </div>
            </div>

            <dl className="grid gap-x-10 gap-y-7 border-t border-white/12 pt-6 lg:grid-cols-3">
              {META.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{item.label}</dt>
                  <dd className="mt-3 max-w-[32ch] text-base leading-[1.4] text-neutral-300">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <Visual src="/cases/dzen/home.png" alt="Главная страница магазина DZEN" className="aspect-[1.44/1]" imageClassName="object-top" />

          <section className="grid gap-12 py-36 lg:grid-cols-[1fr_1.1fr] lg:items-end mob:py-20">
            <Label>Задача</Label>
            <div>
              <h2 className="max-w-[13ch] text-[clamp(3.4rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300 mob:text-[3.1rem]">
                Сохранить характер бренда и не усложнить покупку
              </h2>
              <p className="mt-9 max-w-[38ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">
                Пользователь должен почувствовать эстетику DZEN, перейти в каталог, выбрать размер и добавить товар в корзину.
              </p>
            </div>
          </section>
        </Container>

        <section className="bg-[#526cf6] py-24 text-[#080808] mob:py-14">
          <Container variant="default">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <Label dark>Контекст</Label>
                <h2 className="mt-7 max-w-[10ch] text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.84] tracking-[-0.07em]">Магазин должен быть и образом, и инструментом</h2>
              </div>
              <p className="max-w-[34ch] text-xl leading-[1.45] text-black/70 mob:text-lg">
                Слишком нейтральный интерфейс стирает бренд. Слишком экспрессивный мешает сравнивать вещи и принимать решение.
              </p>
            </div>
          </Container>
        </section>

        <Container variant="default">
          <section className="grid gap-16 py-36 lg:grid-cols-[0.55fr_1.45fr] mob:py-20">
            <div>
              <Label>Пайплайн</Label>
              <p className="mt-7 max-w-[30ch] text-xl leading-[1.5] text-neutral-400">От визуального характера коллекции до полного сценария покупки.</p>
            </div>
            <div className="grid gap-14">
              {PIPELINE.map((item) => (
                <article key={item.title} className="grid gap-7 sm:grid-cols-[10rem_1fr] sm:items-center">
                  <div className="grid h-24 grid-cols-4 grid-rows-3 gap-1.5" aria-hidden="true">
                    <span className={cn(item.color, 'col-span-3')} />
                    <span className={cn(item.color, 'col-start-2 col-span-2')} />
                    <span className={cn(item.color, 'col-span-1')} />
                  </div>
                  <div>
                    <h2 className="text-[clamp(2.25rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.05em] text-neutral-300">{item.title}</h2>
                    <p className="mt-4 max-w-[36ch] text-lg leading-[1.5] text-neutral-500">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Container>

        <section className="bg-[#d6d9e0] py-24 text-[#080808] mob:py-14">
          <Container variant="default">
            <Label dark>Структура сценария</Label>
            <h2 className="mt-7 max-w-[13ch] text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">Увидеть. Сравнить. Выбрать. Купить.</h2>
            <div className="mt-16 grid gap-8 text-[clamp(1.8rem,3.5vw,3.75rem)] leading-[1.05] tracking-[-0.04em] sm:grid-cols-2">
              <p>Редакционная главная знакомит с коллекцией.</p>
              <p>Каталог превращает атмосферу в понятный выбор.</p>
              <p>Карточка собирает размер, цену и действие.</p>
              <p>Корзина завершает спокойный путь к покупке.</p>
            </div>
          </Container>
        </section>

        <Container variant="default">
          <section className="py-36 mob:py-20">
            <Label>Каталог</Label>
            <h2 className="mt-7 max-w-[12ch] text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300">Фотография работает как навигация</h2>
            <Visual src="/cases/dzen/catalog.png" alt="Каталог одежды DZEN" className="mt-12 aspect-[1.44/1]" />
          </section>

          <section className="pb-36 mob:pb-20">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
              <div>
                <Label>Карточка товара</Label>
                <h2 className="mt-6 text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300">Решение собирается на одном экране</h2>
                <p className="mt-8 max-w-[34ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">Галерея, цена, размер, количество и добавление в корзину находятся рядом.</p>
              </div>
              <Visual src="/cases/dzen/product.png" alt="Карточка товара DZEN" className="aspect-[1.44/1]" />
            </div>
          </section>
        </Container>

        <section className="bg-[#526cf6] py-24 text-[#080808] mob:py-14">
          <Container variant="default">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <Visual src="/cases/dzen/about.png" alt="Страница о бренде DZEN" className="aspect-[1.44/1]" />
              <div>
                <Label dark>Арт-дирекшн</Label>
                <h2 className="mt-6 text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em]">Город шумит. Форма остаётся.</h2>
                <p className="mt-8 max-w-[33ch] text-xl leading-[1.5] text-black/70 mob:text-lg">Холодный синий, крупная типографика и предметная съёмка удерживают единый характер бренда.</p>
              </div>
            </div>
          </Container>
        </section>

        <Container variant="default">
          <section className="grid gap-14 py-36 lg:grid-cols-2 mob:py-20">
            <div>
              <Label>Статус</Label>
              <h2 className="mt-6 max-w-[11ch] text-[clamp(3.25rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.055em] text-neutral-300">Интерактивный веб-прототип</h2>
            </div>
            <p className="self-end max-w-[39ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">Главная, каталог, карточка товара и основной путь покупки реализованы. Следующий этап: проверка конверсии между витриной и каталогом.</p>
          </section>
        </Container>

        <section className="bg-[#e8e8e3] py-24 text-[#080808] mob:py-14">
          <Container variant="default">
            <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:items-end">
              <Label dark>Следующий вопрос</Label>
              <h2 className="max-w-[15ch] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">Где атмосфера помогает выбору, а где начинает ему мешать?</h2>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
