export const SOCIALS = {
  product: 'Продукт',
  systems: 'Системы',
  research: 'Исследования',
  launches: 'Концепты',
} as const

export type SocialSource = keyof typeof SOCIALS

export type SocialsItem = {
  slug: string
  source: SocialSource
  link?: string
  title?: string
  content: string[]
  image?: string
  video?: string
  gallery?: string[]
}

export const ITEMS: SocialsItem[] = [
  {
    slug: 'case-1',
    source: 'launches',
    title: 'KODO: сообщество о вайбкодинге',
    image: '/cases/kodo-case-cover.jpg',
    link: '/archive/case-1',
    content: [
      'KODO: онлайн-сообщество о вайбкодинге и AI-разработке с публикациями, обсуждениями и профилями авторов.',
      'Библиотека собирает полезные ресурсы, а Prompt Lab помогает структурировать задачу и улучшить промпт.',
    ],
  },
  {
    slug: 'case-2',
    source: 'product',
    title: 'Темпо',
    image: '/cases/tempo/cover.webp',
    link: '/archive/case-2',
    content: [
      'Мобильный таск-менеджер, который объединяет планирование задач и заботу о себе без давления и перегрузки.',
      'Проект включает продуктовую структуру, пользовательские сценарии, позиционирование и визуальный язык приложения.',
    ],
  },
  {
    slug: 'case-3',
    source: 'launches',
    title: 'Дзен',
    image: '/cases/dzen/home.png',
    link: '/archive/case-3',
    content: [
      'Интернет-магазин стритвир-бренда, где крупная предметная съёмка и выразительная типографика создают атмосферу коллекции.',
      'Каталог, карточка товара и корзина собраны в понятный путь от знакомства с брендом до решения о покупке.',
    ],
  },
  {
    slug: 'case-4',
    source: 'systems',
    title: 'Портфолио как цифровой продукт',
    image: '/cases/portfolio/archive.png',
    link: '/archive/case-4',
    content: [
      'Личный сайт, который помогает быстро понять подход дизайнера, выбрать релевантный кейс и перейти к контакту.',
      'Проект объединяет исследования портфолио, информационную архитектуру, типографическую систему, motion и frontend-реализацию.',
    ],
  },
  {
    slug: 'case-6',
    source: 'research',
    title: 'Токсичник',
    video: '/cases/toxichnik-cover.mp4',
    link: '/archive/case-6',
    content: [
      'Интерактивная цифровая инсталляция, где злой комментарий переводится из сетевой среды в физический объект и становится частью исследовательского ритуала.',
      'Проект строится на стыке веб-опыта, 3D-сцены и объектного высказывания о том, как агрессия оседает, накапливается и формирует собственную экосистему.',
    ],
  },
  {
    slug: 'case-7',
    source: 'systems',
    title: 'PT Mono',
    image: '/cases/vibecode/pt-mono.png',
    link: '/archive/case-7',
    content: [
      'Продуктовый лендинг о шрифте PT Mono, собранный как ясный цифровой рассказ о ритме, данных и интерфейсной строгости.',
      'Проект переводит типографическую тему в веб-формат с акцентом на структуру, характер гарнитуры и ее практическое применение.',
    ],
  },
  {
    slug: 'case-8',
    source: 'research',
    title: 'Путь самурая',
    image: '/cases/vibecode/samurai.png',
    link: '/archive/case-8',
    content: [
      'Интерактивный веб-постер, где история строится через три состояния: действие, дыхание и след.',
      'Проект соединяет сценографию, ритм и ритуальные интеракции, превращая просмотр в последовательное прохождение.',
    ],
  },
  {
    slug: 'case-9',
    source: 'systems',
    title: 'Веб-плакат',
    image: '/cases/vibecode/web-poster.png',
    link: '/archive/case-9',
    content: [
      'Промо-сайт дня открытых дверей школы DZEN, собранный как масштабный цифровой плакат о современных восточных практиках.',
      'Крупная типографика, монохромная фотография и интерактивная завеса из японских знаков связывают айдентику события с поведением страницы.',
    ],
  },
  {
    slug: 'case-10',
    source: 'research',
    title: 'Интерактивная веб-новелла',
    image: '/cases/vibecode/web-novella/scenes/scare-bad-v1.webp',
    gallery: [
      '/cases/vibecode/web-novella/scenes/scare-bad-v1.webp',
      '/cases/vibecode/web-novella/scenes/grandma-room-v1.webp',
      '/cases/vibecode/web-novella/scenes/secret-room-v1.webp',
      '/cases/vibecode/web-novella/scenes/end-trust-v1.webp',
    ],
    link: '/archive/case-10',
    content: [
      'Интерактивная хоррор-новелла о бабушкином доме, чужом голосе и памяти. Решения читателя меняют маршрут истории и приводят к разным финалам.',
      'Для проекта создана система из 27 генеративных сцен, объединённых светом, цветом, повторяющимися объектами и общей кинематографичной атмосферой.',
    ],
  },
  {
    slug: 'case-11',
    source: 'launches',
    title: 'Слушай текст',
    image: '/cases/listen-text/listen-text.png',
    link: '/archive/case-11',
    content: [
      'Учебный проект, с которым я поступил в университет: концепция музыкального приложения, связывающего прослушивание песни, текст, перевод и контекст.',
      'Это ранняя и неидеальная работа. В архиве опубликован только фрагмент проекта, который помогает увидеть отправную точку моего дизайнерского пути.',
    ],
  },
]
