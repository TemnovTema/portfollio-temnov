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
    <section data-section="hero-index" className={cn('flex flex-col gap-8', 'pt-24 pb-4 mob:pt-24 mob:pb-2')}>
      <div className="space-y-8 mob:space-y-6">
        <div className={cn('relative z-[-20]', 'flex flex-col items-center gap-5 text-center mob:gap-4')}>
          <H1>
            Здравствуйте, <RotatingGreetingWord />
          </H1>
          <H4 className="max-w-[42ch] font-sans text-lg normal-case leading-[1.45] text-neutral-400 mob:max-w-[30ch] mob:text-base mob:leading-[1.45]">
            {heroContent.subtitle}
          </H4>
        </div>

        <div className={cn('flex mob:flex-col justify-center gap-2')}>
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
