import type {Metadata} from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: {
    template: '%s — Portfolio',
    default: 'Портфолио продуктового дизайнера',
  },
  description: 'Портфолио продуктового дизайнера: продуктовые сценарии, интерфейсные системы, исследования и архив выбранных кейсов.',
}

export const geistMono = localFont({
  src: '../assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

export const suisseIntl = localFont({
  variable: '--font-suisse-intl',
  src: [
    {
      path: '../assets/fonts/SuisseIntl-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/SuisseIntl-Medium.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/SuisseIntl-SemiBold.woff2',
      weight: '600',
    },
  ],
})
