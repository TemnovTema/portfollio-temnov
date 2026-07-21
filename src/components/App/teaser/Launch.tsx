import {WEBSITE_PATHS} from '@/lib/constants'
import {cn} from '@/lib/utils'
import {ArrowUpRight, UserRound} from 'lucide-react'

import {H4} from '~/UI/Typography'
import Button from '~/UI/Button'

export default function Launch() {
  return (
    <section
      id="form"
      data-section="launch-teaser"
      className={cn(
        'mx-auto flex w-full max-w-[44rem] flex-col items-center justify-center gap-3',
        'lap:max-w-[38rem] lap:gap-2.5',
        'mob:max-w-none mob:px-0',
      )}
    >
      <div className="w-full space-y-3 mob:space-y-4">
        <H4 className="max-w-[38ch] text-balance text-center font-sans text-lg normal-case leading-[1.45] text-neutral-400 lap:max-w-[36ch] lap:text-base mob:max-w-none mob:px-0 mob:text-base mob:leading-[1.5]">
          Открыт к продуктовым задачам, где важны ясная структура, зрелый UX и аккуратная работа на стыке стратегии, интерфейса и системы.
        </H4>
      </div>

      <div className="flex w-full gap-2 mob:flex-col mob:gap-2.5">
        <Button
          to={WEBSITE_PATHS.archive}
          className="w-full whitespace-nowrap mob:min-h-[4.25rem] mob:text-sm"
          icon={<ArrowUpRight />}
          text="Смотреть архив"
        />
        <Button
          to={WEBSITE_PATHS.about}
          className="w-full whitespace-nowrap mob:min-h-[4.25rem] mob:text-sm"
          icon={<UserRound />}
          variant="outline"
          text="Обо мне"
        />
      </div>
    </section>
  )
}
