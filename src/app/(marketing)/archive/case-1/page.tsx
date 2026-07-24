export const metadata = {
  title: 'KODO: сообщество о вайбкодинге и AI-разработке',
  description: 'Продуктовый кейс KODO: сообщество, библиотека ресурсов, Prompt Lab и визуальная система.',
}

import Image from 'next/image'
import Link from 'next/link'
import {ArrowUpRight} from 'lucide-react'

import {cn} from '@/lib/utils'
import Container from '~/Global/Container'
import ScrollProgress from '~~/research/ScrollProgress'
import {BUTTON_SIZES, BUTTON_VARIANTS} from '~/UI/Button'

const KODO_URL = 'https://kodo-media.vercel.app/profile'
const KODO_PRD_URL = 'https://app.notion.com/p/3a76ff52ef1080ea972ccda39aea5d9b'

const ROLE_ITEMS = [
  'Концепция продукта',
  'Информационная архитектура',
  'Пользовательские сценарии',
  'Интерфейс и прототип',
  'Дизайн-система',
  'Базовый брендинг',
]

const PRODUCT_LOOP = ['Найти', 'Обсудить', 'Сохранить', 'Применить', 'Поделиться']

function Visual({
  src,
  alt,
  className,
  imageClassName,
  sizes = '(max-width: 768px) 100vw, 90vw',
}: {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  sizes?: string
}) {
  return (
    <figure className={cn('group relative overflow-hidden rounded-[28px] bg-[#111] mob:rounded-2xl', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={cn('object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]', imageClassName)}
      />
    </figure>
  )
}

function SectionLabel({children}: {children: React.ReactNode}) {
  return <p className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">{children}</p>
}

export default function CaseOnePage() {
  return (
    <>
      <ScrollProgress />

      <main className="overflow-hidden pb-32 mob:pb-20">
        <Container variant="default">
          <section className="flex min-h-[calc(100dvh-7rem)] flex-col justify-between gap-12 pb-16 pt-10 mob:min-h-0 mob:gap-10 mob:pb-12 mob:pt-5">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
              <span>Продуктовый кейс</span>
              <span>Сообщество и инструменты</span>
            </div>

            <div className="grid items-end gap-10 lg:grid-cols-[1fr_24rem]">
              <div>
                <h1 className="text-[clamp(7rem,20vw,19rem)] font-semibold leading-[0.72] tracking-[-0.09em] text-neutral-300 mob:text-[28vw]">
                  KODO
                </h1>
                <p className="mt-12 max-w-[31ch] text-[clamp(1.65rem,3vw,3.25rem)] leading-[1.08] tracking-[-0.04em] text-neutral-300 mob:mt-8 mob:text-2xl">
                  Сообщество о вайбкодинге и AI-разработке.
                </p>
              </div>

              <div className="space-y-7">
                <p className="max-w-[34ch] text-lg leading-[1.45] text-neutral-400">
                  Публикации, обсуждения, открытые ресурсы и небольшой инструмент для работы с промптами.
                </p>

                <div className="flex flex-col gap-2">
                  <Link
                    href={KODO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(BUTTON_VARIANTS.DEFAULT, BUTTON_VARIANTS.solid, BUTTON_SIZES.base, 'w-full whitespace-nowrap')}
                  >
                    <ArrowUpRight className="size-5" strokeWidth={1.5} />
                    Открыть KODO
                  </Link>
                  <Link
                    href={KODO_PRD_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Открыть Product Requirements Document KODO в Notion"
                    className={cn(BUTTON_VARIANTS.DEFAULT, BUTTON_VARIANTS.outline, BUTTON_SIZES.base, 'w-full whitespace-nowrap')}
                  >
                    <Image src="/icons/notion.png" alt="" width={18} height={18} className="size-[18px] shrink-0 rounded-[3px]" />
                    Product Requirements Document
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <Visual
            src="/cases/kodo/community.jpg"
            alt="Главная лента сообщества KODO"
            className="aspect-[16/9] w-full"
            imageClassName="object-top"
          />

          <section className="grid gap-12 py-36 lg:grid-cols-[1fr_1.1fr] lg:items-end mob:py-20">
            <SectionLabel>Поворот в концепции</SectionLabel>
            <div>
              <h2 className="max-w-[13ch] text-[clamp(3.4rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300 mob:text-[3.1rem]">
                Не учить. Помогать обмениваться опытом.
              </h2>
              <p className="mt-9 max-w-[38ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">
                Фиксированные уроки быстро устаревают. Поэтому центром KODO стали участники, публикации и обсуждения, а библиотека сохранила полезные материалы.
              </p>
            </div>
          </section>
        </Container>

        <section className="bg-[#5f8d52] py-24 text-[#0a0a0a] mob:py-14">
          <Container variant="default">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-between gap-16">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-black/55">Визуальная система</p>
                  <h2 className="mt-7 max-w-[9ch] text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
                    Код как культурный знак
                  </h2>
                </div>
                <p className="max-w-[34ch] text-xl leading-[1.45] text-black/70 mob:text-lg">
                  Логотип, модульная графика и цветовая система связывают цифровой продукт с плакатами, мерчем и городской средой.
                </p>
              </div>

              <Visual
                src="/cases/kodo-brand/logo.jpg"
                alt="Логотип и модульная графика KODO"
                className="aspect-[1.41/1]"
                sizes="(max-width: 768px) 100vw, 56vw"
              />
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
              <Visual
                src="/cases/kodo-brand/posters.jpg"
                alt="Плакаты KODO в городской среде"
                className="aspect-[1.41/1]"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <Visual
                src="/cases/kodo-brand/poster.png"
                alt="Типографический плакат KODO"
                className="aspect-[0.7/1]"
                imageClassName="object-top"
                sizes="(max-width: 768px) 100vw, 32vw"
              />
            </div>
          </Container>
        </section>

        <Container variant="default">
          <section className="py-36 mob:py-20">
            <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <SectionLabel>Моя работа</SectionLabel>
                <p className="mt-7 max-w-[31ch] text-xl leading-[1.5] text-neutral-400">
                  Я переосмыслил концепцию и собрал продукт от структуры до интерактивного веб-прототипа.
                </p>
              </div>
              <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {ROLE_ITEMS.map((item) => (
                  <p key={item} className="text-[clamp(1.7rem,3vw,3.25rem)] leading-[1.05] tracking-[-0.04em] text-neutral-300">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-8 pb-36 mob:space-y-5 mob:pb-20">
            <div className="max-w-[56rem]">
              <SectionLabel>Сообщество</SectionLabel>
              <h2 className="mt-6 text-[clamp(3.5rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300">
                Контент получает автора и контекст
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
              <Visual
                src="/cases/kodo/community.jpg"
                alt="Редакционные и пользовательские публикации в KODO"
                className="aspect-[16/10]"
                imageClassName="object-left"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <Visual
                src="/cases/kodo/profile.jpg"
                alt="Профиль автора и его публикации в KODO"
                className="aspect-[4/5]"
                imageClassName="object-left"
                sizes="(max-width: 768px) 100vw, 34vw"
              />
            </div>

            <p className="ml-auto max-w-[34ch] text-xl leading-[1.5] text-neutral-400 mob:ml-0 mob:text-lg">
              Профили, реакции и комментарии помогают обсуждать материалы и понимать, чей опыт стоит за публикацией.
            </p>
          </section>

          <section className="pb-36 mob:pb-20">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
              <div>
                <SectionLabel>Библиотека</SectionLabel>
                <h2 className="mt-6 text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300">
                  Полезное не теряется в ленте
                </h2>
                <p className="mt-8 max-w-[34ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">
                  Skills, шаблоны, дизайн-системы, гайды и открытые курсы собраны по категориям и доступны для сохранения.
                </p>
              </div>
              <Visual
                src="/cases/kodo/library.jpg"
                alt="Категории и ресурсы библиотеки KODO"
                className="aspect-[16/10]"
                imageClassName="object-left"
                sizes="(max-width: 768px) 100vw, 64vw"
              />
            </div>
          </section>
        </Container>

        <section className="bg-[#111] py-24 mob:py-14">
          <Container variant="default">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <Visual
                src="/cases/kodo/prompt-lab.jpg"
                alt="Интерфейс Prompt Lab для структурирования задачи"
                className="aspect-[16/10]"
                imageClassName="object-left"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div>
                <SectionLabel>Prompt Lab</SectionLabel>
                <h2 className="mt-6 text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em] text-neutral-300">
                  Сначала задача. Потом промпт.
                </h2>
                <p className="mt-8 max-w-[33ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">
                  Инструмент помогает задать контекст, ограничения и критерии готовности, чтобы улучшить исходный запрос.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <Container variant="default">
          <section className="py-36 mob:py-20">
            <SectionLabel>Основной цикл</SectionLabel>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 text-[clamp(2.4rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.05em] text-neutral-300">
              {PRODUCT_LOOP.map((item, index) => (
                <div key={item} className="flex items-center gap-5">
                  <span>{item}</span>
                  {index < PRODUCT_LOOP.length - 1 && <span className="text-[#5f8d52]" aria-hidden="true">→</span>}
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-14 pb-36 lg:grid-cols-2 mob:pb-20">
            <div>
              <SectionLabel>Статус</SectionLabel>
              <h2 className="mt-6 max-w-[11ch] text-[clamp(3.25rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.055em] text-neutral-300">
                Интерактивный веб-прототип
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="max-w-[39ch] text-xl leading-[1.5] text-neutral-400 mob:text-lg">
                Основные сценарии и интерфейсы реализованы. Пользовательский контент, публикации и тесты требуют проверки после запуска.
              </p>
              <p className="mt-8 max-w-[39ch] text-xl leading-[1.5] text-neutral-300 mob:text-lg">
                Следующий вопрос: станет ли практический опыт участников причиной регулярно возвращаться в KODO?
              </p>
            </div>
          </section>

          <section className="rounded-[28px] bg-[#5f8d52] px-10 py-12 text-[#0a0a0a] mob:rounded-2xl mob:px-6 mob:py-8">
            <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:items-end">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-black/55">Следующий шаг</p>
              <h2 className="max-w-[15ch] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                Проверить, станет ли пользовательский контент причиной возвращаться в KODO
              </h2>
            </div>
          </section>
        </Container>
      </main>
    </>
  )
}
