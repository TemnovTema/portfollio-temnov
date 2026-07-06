import {WEBSITE_PATHS} from '@/lib/constants'
import {cn} from '@/lib/utils'
import {ArrowUpRight, UserRound} from 'lucide-react'

import {H4} from '~/UI/Typography'
import Button from '~/UI/Button'

export default function Launch() {
  return (
    <section id="form" data-section="launch-teaser" className={cn('max-w-[29vw] lap:max-w-[34vw] mob:max-w-none mx-auto mob:px-2', 'flex flex-col items-center justify-center gap-3 lap:gap-2.5')}>
      <div className="space-y-3 mob:space-y-5 w-full">
        <H4 className="text-lg text-center lap:text-base mob:px-14">Открыт к продуктовым задачам, где важны ясная структура, зрелый UX и аккуратная работа на стыке стратегии, интерфейса и системы.</H4>
      </div>

      <div className="w-full flex mob:flex-col gap-2">
        <Button to={WEBSITE_PATHS.archive} className="w-full" icon={<ArrowUpRight />} text="Смотреть архив" />
        <Button to={WEBSITE_PATHS.about} className="w-full" icon={<UserRound />} variant="outline" text="Обо мне" />
      </div>
    </section>
  )
}
