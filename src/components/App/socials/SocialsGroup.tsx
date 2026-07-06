import {SOCIALS, type SocialSource} from '@/app/archive/storage'

import Button from '~/UI/Button'
import SocialsIcon from '~~/socials/SocialsIcon'

export default function SocialsGroup({variant = 'light'}: {variant?: 'light' | 'dark'}) {
  return (
    <section data-section="socials-nav" className="w-full grid grid-cols-4 gap-2 mob:grid-cols-2 mob:gap-1.5">
      {Object.entries(SOCIALS).map(([key, label]) => (
        <Button variant={variant === 'light' ? 'solid' : 'outline'} size="small" className="w-full !px-0" text={label} icon={<SocialsIcon mode={variant === 'dark' ? 'light' : 'dark'} source={key as SocialSource} />} key={key} />
      ))}
    </section>
  )
}
