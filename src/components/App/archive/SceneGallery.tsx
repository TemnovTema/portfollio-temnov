'use client'

import {ArrowLeft, ArrowRight} from 'lucide-react'
import Image from 'next/image'
import {useState} from 'react'

type Scene = {
  src: string
  label: string
}

export default function SceneGallery({scenes}: {scenes: Scene[]}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeScene = scenes[activeIndex]

  const selectRelative = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + scenes.length) % scenes.length)
  }

  return (
    <section className="space-y-6" aria-labelledby="scene-gallery-title">
      <div className="flex items-end justify-between gap-5 mob:items-start">
        <div className="space-y-3">
          <h2 id="scene-gallery-title" className="text-[clamp(2.5rem,4.8vw,5rem)] font-medium leading-[0.96] tracking-[-0.055em] text-neutral-300 mob:text-[2.5rem]">
            Галерея сцен
          </h2>
          <p className="max-w-[48ch] text-lg leading-[1.5] text-neutral-400 mob:text-base">
            27 генеративных кадров образуют маршрут истории: от дороги к дому, от найденных предметов к развилкам и трём вариантам финала.
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => selectRelative(-1)} aria-label="Предыдущая сцена" className="grid size-11 place-items-center rounded-full border border-white/15 text-neutral-300 transition-colors hover:border-white/40 hover:bg-white hover:text-black active:scale-[0.97]">
            <ArrowLeft className="size-5" strokeWidth={1.5} />
          </button>
          <button type="button" onClick={() => selectRelative(1)} aria-label="Следующая сцена" className="grid size-11 place-items-center rounded-full border border-white/15 text-neutral-300 transition-colors hover:border-white/40 hover:bg-white hover:text-black active:scale-[0.97]">
            <ArrowRight className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <figure className="overflow-hidden rounded-[28px] border border-white/12 bg-black-light mob:rounded-2xl">
        <div className="relative aspect-[16/9]">
          <Image
            key={activeScene.src}
            src={activeScene.src}
            alt={`Сцена веб-новеллы: ${activeScene.label}`}
            fill
            sizes="(max-width: 500px) calc(100vw - 20px), 96vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20 mob:p-4 mob:pt-14">
            <figcaption className="text-xl font-medium tracking-[-0.02em] text-white mob:text-base">{activeScene.label}</figcaption>
            <span className="font-mono text-xs text-neutral-300">{String(activeIndex + 1).padStart(2, '0')} / {String(scenes.length).padStart(2, '0')}</span>
          </div>
        </div>
      </figure>

      <div className="flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Все сцены">
        {scenes.map((scene, index) => (
          <button
            key={scene.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Открыть сцену ${index + 1}: ${scene.label}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={`relative aspect-[16/9] w-[11rem] shrink-0 snap-start overflow-hidden rounded-xl border transition-all mob:w-[8rem] ${index === activeIndex ? 'border-white opacity-100' : 'border-white/10 opacity-45 hover:opacity-80'}`}
          >
            <Image src={scene.src} alt="" fill sizes="176px" className="object-cover" />
          </button>
        ))}
      </div>
    </section>
  )
}
