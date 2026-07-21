import {WEBSITE_PATHS} from '@/lib/constants'
import {cn} from '@/lib/utils'

import {H1, H4} from '~/UI/Typography'
import Button from '~/UI/Button'
import {ArrowUpRight} from 'lucide-react'
import RotatingGreetingWord from '~~/index/RotatingGreetingWord'

export const MOB_SCREEN_HEIGHT = 'mob:h-screen mob:h-svh!'

const heroContent = {
  subtitle: 'Избранные продуктовые кейсы и исследования собраны ниже.',
}

export default function Hero() {
  return (
    <section data-section="hero-index" className={cn('flex flex-col gap-8', 'pt-24 pb-4 mob:min-h-[calc(100svh-10.5rem)] mob:pt-24 mob:pb-4')}>
      <div className="space-y-8 mob:flex mob:flex-1 mob:flex-col mob:justify-between mob:space-y-0">
        <div className={cn('relative z-[-20]', 'flex flex-col items-center gap-5 text-center mob:hidden')}>
          <H1>
            Здравствуйте, <RotatingGreetingWord />
          </H1>
          <H4 className="max-w-[42ch] font-sans text-lg normal-case leading-[1.45] text-neutral-400 mob:max-w-[30ch] mob:text-base mob:leading-[1.45]">
            {heroContent.subtitle}
          </H4>
        </div>

        <div className="relative hidden flex-1 flex-col mob:flex">
          <div className="pointer-events-none absolute inset-x-[-0.625rem] top-[10%] h-[48%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.055),transparent_68%)]" />

          <div className="relative flex flex-1 flex-col justify-center pb-5 pt-2">
            <p className="mb-3 text-center text-lg font-medium tracking-[-0.025em] text-neutral-500">
              Здравствуйте,
            </p>
            <div className="border-y border-white/10 py-4">
              <div className="text-[clamp(3.75rem,18vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
                <RotatingGreetingWord variant="mobile-stage" />
              </div>
            </div>
          </div>

          <H4 className="max-w-[29ch] font-sans text-base normal-case leading-[1.45] text-neutral-400">
            {heroContent.subtitle}
          </H4>
        </div>

        <div className={cn('flex mob:flex-col justify-center gap-2 mob:pt-6')}>
          <div className="p-1 bg-white/10 border border-white/20 hover:border-white/60 duration-300 rounded-xl">
            <Button
              to={`${WEBSITE_PATHS.home}#featured-cases`}
              className="mob:w-full"
              icon={<ArrowUpRight className="duration-300 ease-out group-hover:rotate-[135deg]" strokeWidth={1.5} />}
              text="Смотреть кейсы"
            />
          </div>

          <Button to={WEBSITE_PATHS.about} className="mob:hidden border-white/20 rounded-xl" variant="outline" text="Обо мне" />
        </div>
      </div>
    </section>
  )
}
