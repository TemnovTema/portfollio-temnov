export const metadata = {
  title: 'Слушай текст — учебный проект',
  description: 'Фрагмент учебного проекта музыкального приложения «Слушай текст», созданного для поступления в университет.',
}

import Image from 'next/image'
import Link from 'next/link'

import Container from '~/Global/Container'
import ScrollProgress from '~~/research/ScrollProgress'

const META = [
  {label: 'Формат', value: 'Учебный проект'},
  {label: 'Контекст', value: 'Поступление в университет'},
  {label: 'Статус', value: 'Опубликован фрагмент'},
]

export default function ListenTextCasePage() {
  return (
    <>
      <ScrollProgress />

      <Container variant="default" className="space-y-20 pb-32 mob:space-y-12 mob:pb-20">
        <header className="space-y-12 mob:space-y-8">
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
            <Link href="/archive/concepts" className="transition-colors hover:text-neutral-200">← Концепты</Link>
            <span>Учебный проект</span>
          </div>

          <div className="max-w-[76rem] space-y-7">
            <h1 className="max-w-[10ch] text-[clamp(4.5rem,8vw,9rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-neutral-300 mob:text-[3.25rem] mob:leading-[0.96]">
              Слушай текст
            </h1>
            <p className="max-w-[44ch] text-2xl leading-[1.3] text-neutral-400 mob:text-lg">
              Концепция музыкального приложения, в котором прослушивание песни связано с текстом, переводом и контекстом произведения.
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

        <figure className="overflow-hidden rounded-[28px] border border-white/12 bg-[#526cf6] mob:rounded-2xl">
          <Image
            src="/cases/listen-text/listen-text.png"
            alt="Четыре экрана концепции музыкального приложения Слушай текст"
            width={2048}
            height={1209}
            priority
            className="h-auto w-full"
          />
        </figure>

        <section className="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] gap-16 border-t border-white/12 pt-10 max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <h2 className="text-6xl font-medium leading-[0.95] tracking-[-0.045em] text-neutral-400 mob:text-4xl">О проекте</h2>
          <div className="max-w-[44rem] space-y-6 text-2xl leading-[1.35] text-neutral-300 mob:text-lg">
            <p>Это учебный проект, с которым я поступил в университет. Он показывает одну из моих первых попыток связать интерфейс, музыку и образовательный контекст в цельный пользовательский сценарий.</p>
            <p className="text-neutral-500">Работа не идеальна, и здесь опубликован только её фрагмент. Я сохраняю её в архиве как честную точку отсчёта — дальше описание и структуру кейса ещё предстоит дополнить.</p>
          </div>
        </section>
      </Container>
    </>
  )
}
