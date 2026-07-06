import {ArrowDownRight} from 'lucide-react'

const linksData = {
  1: {
    anchor: '#что-ищу',
    label: 'Что ищу',
  },
  2: {
    anchor: '#навыки',
    label: 'Навыки',
  },
  3: {
    anchor: '#сильная-сторона',
    label: 'Сильная сторона',
  },
  4: {
    anchor: '#образование',
    label: 'Образование',
  },
}

export default function AnchorLinks() {
  return (
    <div className="flex w-fit max-w-full flex-wrap gap-x-4 gap-y-2 mob:gap-x-3 mob:gap-y-2">
      {Object.values(linksData).map((link, index) => (
        <a href={link.anchor} className="flex items-end gap-0.5 whitespace-nowrap text-base text-neutral-500 group mob:text-sm" key={index}>
          <span>{link.label}</span>

          <ArrowDownRight className="group-hover:rotate-[45deg] duration-300" strokeWidth={1.5} />
        </a>
      ))}
    </div>
  )
}
