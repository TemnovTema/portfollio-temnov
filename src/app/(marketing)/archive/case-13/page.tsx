export const metadata = {
  title: 'KODO — брендинг',
  description: 'Айдентика KODO: логотип, графическая система, печатные носители, наружная реклама, мерч и социальные сети.',
}

import Image from 'next/image'
import Link from 'next/link'

import Container from '~/Global/Container'
import ScrollProgress from '~~/research/ScrollProgress'

const KODO_SITE_URL = 'https://kodo-media.vercel.app/profile'

const BRAND_ASSETS = [
  {src: '/cases/kodo-brand/logo.jpg', caption: 'Логотип', alt: 'Белый геометрический логотип KODO на тёмном фоне'},
  {src: '/cases/kodo-brand/stationery.jpg', caption: 'Система носителей', alt: 'Печатная продукция KODO: книги, карточки, буклеты, бейдж и фирменная лента'},
  {src: '/cases/kodo-brand/stationery-2.jpg', caption: 'Ежедневник', alt: 'Фирменный ежедневник KODO с цветной модульной графикой'},
  {src: '/cases/kodo-brand/banner.jpg', caption: 'Городской баннер', alt: 'Рекламный баннер KODO в городской зелёной среде'},
  {src: '/cases/kodo-brand/billboard.jpg', caption: 'Билборд', alt: 'Наружная реклама KODO с модульной цветной графикой'},
  {src: '/cases/kodo-brand/posters.jpg', caption: 'Уличные постеры', alt: 'Серия цветных постеров KODO на городской поверхности'},
  {src: '/cases/kodo-brand/merch.jpg', caption: 'Мерч', alt: 'Футболка и кепка KODO с цифровой пиксельной графикой'},
  {src: '/cases/kodo-brand/merch-2.jpg', caption: 'Шоппер', alt: 'Чёрный шоппер KODO с цветной модульной графикой'},
  {src: '/cases/kodo-brand/social-media.jpg', caption: 'Социальные сети', alt: 'Оформление профиля и публикаций KODO в социальных сетях'},
  {src: '/cases/kodo-brand/poster.png', caption: 'Имиджевый постер', alt: 'Имиджевый плакат KODO с фигурой самурая и крупным логотипом'},
  {src: '/cases/kodo-brand/cover-1.jpg', caption: 'Digital cover 01', alt: 'Цифровая обложка KODO с фигурой в маске'},
  {src: '/cases/kodo-brand/cover-2.jpg', caption: 'Digital cover 02', alt: 'Цифровая обложка KODO о сильном промпте'},
  {src: '/cases/kodo-brand/cover-4.jpg', caption: 'Digital cover 03', alt: 'Цифровая обложка KODO с кибернетической фигурой'},
] as const

const META = [
  {label: 'Проект', value: 'KODO'},
  {label: 'Направление', value: 'Брендинг и айдентика'},
  {label: 'Носители', value: 'Digital, print, outdoor, merch'},
]

export default function KodoBrandPage() {
  return (
    <>
      <ScrollProgress />

      <Container variant="default" className="space-y-20 pb-32 mob:space-y-12 mob:pb-20">
        <header className="space-y-12 mob:space-y-8">
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
            <Link href="/archive/graphics" className="transition-colors hover:text-neutral-200">← Графика</Link>
            <span>Brand identity</span>
          </div>

          <div className="max-w-[78rem] space-y-7">
            <h1 className="max-w-[11ch] text-[clamp(4.5rem,8vw,9rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-neutral-300 mob:text-[3.25rem] mob:leading-[0.96]">
              KODO. Брендинг
            </h1>
            <p className="max-w-[46ch] text-2xl leading-[1.3] text-neutral-400 mob:text-lg">
              Айдентика школы о программировании, технологиях и цифровом мышлении — гибкая система, которая соединяет строгую структуру кода и живой визуальный ритм.
            </p>
          </div>

          <div className="grid grid-cols-3 border-y border-white/12 max-[820px]:grid-cols-1 max-[820px]:divide-y max-[820px]:divide-white/12">
            {META.map((item) => (
              <div key={item.label} className="py-6 pr-8 max-[820px]:py-4">
                <div className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">{item.label}</div>
                <div className="mt-3 max-w-[25ch] text-lg leading-tight text-neutral-300 mob:text-base">{item.value}</div>
              </div>
            ))}
          </div>
        </header>

        <section className="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] gap-16 border-t border-white/12 pt-10 max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <h2 className="text-6xl font-medium leading-[0.95] tracking-[-0.045em] text-neutral-400 mob:text-4xl">Система бренда</h2>
          <div className="max-w-[44rem] space-y-6 text-2xl leading-[1.35] text-neutral-300 mob:text-lg">
            <p>Основа айдентики — геометрический логотип и модульная графика, напоминающая одновременно фрагменты кода, схему и развивающуюся цифровую структуру.</p>
            <p className="text-neutral-500">Система масштабируется от небольших печатных форматов до наружной рекламы и сохраняет узнаваемый характер в мерче и социальных сетях.</p>
          </div>
        </section>

        <section className="space-y-16 mob:space-y-8" aria-label="Носители фирменного стиля KODO">
          {BRAND_ASSETS.map((asset, index) => (
            <figure key={asset.src} className="space-y-3">
              <div className="overflow-hidden rounded-[28px] border border-white/12 bg-[#1d1d1d] mob:rounded-2xl">
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={2400}
                  height={1701}
                  priority={index === 0}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="flex justify-between font-mono text-xs uppercase tracking-[0.12em] text-neutral-600">
                <span>{asset.caption}</span>
                <span>{String(index + 1).padStart(2, '0')} / {String(BRAND_ASSETS.length).padStart(2, '0')}</span>
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="flex min-h-[30rem] flex-col items-start justify-between gap-16 border-t border-white/12 pt-10 mob:min-h-0">
          <div className="space-y-5">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-600">Digital product</div>
            <h2 className="max-w-[16ch] text-6xl font-medium leading-[0.96] tracking-[-0.045em] text-neutral-300 mob:text-4xl">
              Для KODO также разработан сайт
            </h2>
            <p className="max-w-[42ch] text-xl leading-[1.4] text-neutral-500 mob:text-base">
              Айдентика продолжается в цифровом продукте: интерфейс использует тот же визуальный язык, типографику и принципы модульной композиции.
            </p>
          </div>

          <Link
            href={KODO_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white bg-white px-7 py-4 font-mono text-sm uppercase tracking-[0.08em] text-black transition-transform duration-200 active:scale-[0.98]"
          >
            Открыть сайт KODO ↗
          </Link>
        </section>
      </Container>
    </>
  )
}
