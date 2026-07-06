import {cn} from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'compact'
}

export const BOX_STYLES = {
  default: {
    box: 'px-[19rem] lap:px-[2rem] mob:px-2.5',
    padding: 'pt-48 lap:pt-40 mob:pt-32 pb-20',
  },
  compact: {
    box: 'px-[38rem] lap:px-[23rem] mob:px-2',
    padding: 'pt-32 lap:pt-28 mob:pt-24 pb-20',
  },
}

export const HEADER_BOX = 'px-[10rem] lap:px-[2rem] mob:px-2'
export const MINI_BLOCK = 'px-[42rem] lap:px-[25rem] mob:px-2'

export default function Container({children, className, variant = 'default'}: Props) {
  const {box, padding} = BOX_STYLES[variant]

  return <main className={cn(box, padding, className)}>{children}</main>
}
