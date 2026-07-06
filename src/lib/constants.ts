export const WEBSITE_PATHS = {
  home: '/',
  archive: '/archive',
  about: '/about',
}

export const HEADER_DATA = {
  LINKS: [
    {
      label: 'Главная',
      to: WEBSITE_PATHS.home,
      external: false,
    },
    {
      label: 'Архив',
      to: WEBSITE_PATHS.archive,
      external: false,
    },
    {
      label: 'Обо мне',
      to: WEBSITE_PATHS.about,
      external: false,
    },
  ],
  MOBILE_LINKS: [],
} as const
