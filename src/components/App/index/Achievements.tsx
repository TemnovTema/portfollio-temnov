import {BOX_STYLES} from '~/Global/Container'

import {cn} from '@/lib/utils'
import {H2, H4} from '~/UI/Typography'

const achievementsData = {
  1: {
    title: 'Сложное делаю ясным',
    caption: 'Разбираю требования, ограничения и продуктовую логику так, чтобы интерфейс помогал принимать решения, а не добавлял новый слой шума.',
  },
  2: {
    title: 'Собираю системы, а не только экраны',
    caption: 'Работаю с паттернами, состояниями и общими правилами интерфейса, чтобы продукт можно было масштабировать без постоянного ручного ремонта.',
  },
  3: {
    title: 'Держу связь между продуктом и delivery',
    caption: 'Соединяю исследование, дизайн и реализацию: помогаю команде договориться о сценариях, приоритетах и качестве детали до запуска.',
  },
}

function AchievementsBlock({idx, title, caption}: {idx: string; title: string; caption: string}) {
  return (
    <div className={cn('flex flex-col items-center gap-10 mob:gap-6', BOX_STYLES.compact)}>
      <div className="space-y-3 text-center">
        <H2>{title}</H2>
        <H4 className="max-w-[50ch] mx-auto">{caption}</H4>
      </div>

      <div className="w-full h-[70vh] lap:h-[80vh] mob:h-[30vh] bg-black-card border-2 border-gray-medium rounded-2xl mob:rounded-xl overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={`/achievements/${idx}.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default function Achievements() {
  return (
    <section data-section="achievements-index" className="flex flex-col gap-20">
      {Object.entries(achievementsData).map(([key, item]) => (
        <AchievementsBlock {...item} idx={key} key={key} />
      ))}
    </section>
  )
}
