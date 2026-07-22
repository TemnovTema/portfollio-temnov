import ArchiveStudyCase from '~~/archive/ArchiveStudyCase'
import SceneGallery from '~~/archive/SceneGallery'

export const metadata = {
  title: 'Интерактивная веб-новелла',
  description: 'Интерактивная хоррор-новелла с разветвлённым сюжетом и системой генеративных сцен.',
}

const sceneNames = [
  ['arrival-v1.webp', 'Дом у дороги'],
  ['bus-letter-v1.webp', 'Письмо в автобусе'],
  ['bus-stop-v1.webp', 'Последняя остановка'],
  ['forest-road-v1.webp', 'Лесная дорога'],
  ['crossroad-v1.webp', 'Развилка'],
  ['loop-road-v1.webp', 'Дорога замыкается'],
  ['house-calm-v1.webp', 'Дом ждёт'],
  ['yard-v1.webp', 'Во дворе'],
  ['porch-v1.webp', 'Крыльцо'],
  ['hall-v1.webp', 'Тёмный коридор'],
  ['grandma-room-v1.webp', 'Комната бабушки'],
  ['wet-coat-v1.webp', 'Мокрое пальто'],
  ['window-v1.webp', 'Свет в окне'],
  ['letter-v1.webp', 'Найденное письмо'],
  ['letter-reveal-v1.webp', 'Письмо раскрывает правду'],
  ['family-photo-v1.webp', 'Семейная фотография'],
  ['shed-v1.webp', 'Сарай'],
  ['cellar-v1.webp', 'Подвал'],
  ['door-fallen-v1.webp', 'Упавшая дверь'],
  ['mirror-broken-v1.webp', 'Разбитое зеркало'],
  ['secret-room-v1.webp', 'Тайная комната'],
  ['scare-v1.webp', 'Чужой голос'],
  ['scare-bad-v1.webp', 'Ловушка'],
  ['icon-memory-v1.webp', 'Память'],
  ['end-good-v1.webp', 'Финал: отпустить'],
  ['end-trust-v1.webp', 'Финал: довериться'],
  ['end-bad-v1.webp', 'Финал: остаться'],
] as const

const scenes = sceneNames.map(([file, label]) => ({
  src: `/cases/vibecode/web-novella/scenes/${file}`,
  label,
}))

const sections = [
  {
    title: 'Что это за проект',
    text: '«Назови меня бабушкой» — интерактивная хоррор-новелла на 8–10 минут. Читатель приезжает к пустому дому, находит письмо и постепенно понимает, что история замечает его решения раньше, чем он сам.',
  },
  {
    title: 'Как устроен сюжет',
    text: 'Выборы меняют последовательность событий, найденные предметы попадают в инвентарь, а история приходит к нескольким вариантам финала. Прогресс, звук и горизонтальный формат на телефоне поддерживают ощущение самостоятельного прохождения.',
  },
  {
    title: 'Генерация сцен',
    text: 'Для новеллы подготовлено 27 генеративных сцен. Важно было не просто получить отдельные атмосферные кадры, а удержать единый мир: один дом, холодный ночной свет, повторяющиеся предметы, красную нить и узнаваемую фактуру пространства.',
  },
  {
    title: 'Система изображений',
    text: 'Сцены собраны вокруг драматургии маршрута: прибытие, исследование дома, находки, угроза и три финала. Изображение здесь работает как состояние интерфейса и помогает пользователю считывать последствия выбора без лишнего объяснения.',
  },
]

export default function WebNovellaCasePage() {
  return (
    <ArchiveStudyCase
      title="Интерактивная веб-новелла"
      intro="Интерактивная веб-новелла, где читатель исследует бабушкин дом, принимает решения и собирает историю по фрагментам. Визуальный маршрут построен на системе генеративных сцен."
      cover="/cases/vibecode/web-novella/scenes/scare-bad-v1.webp"
      tags={['Веб-новелла', 'Генеративные сцены', 'Narrative UX', 'HTML / CSS / JS']}
      sections={sections}
      liveUrl="https://temnovtema.github.io/web-novella/"
    >
      <SceneGallery scenes={scenes} />
    </ArchiveStudyCase>
  )
}
