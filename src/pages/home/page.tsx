import { Link, useLoaderData } from 'react-router-dom'
import Balancer from 'react-wrap-balancer'
import { Facility, getFacilities } from '@/shared/api'
import { prop } from '@/shared/lib'

export const homeLoader = async () => prop('facility')(await getFacilities())

export const HomePage = () => {
  const facilities = useLoaderData() as Facility[]

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">
        <Balancer>Русское культурное наследие в Сербии</Balancer>
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="flex items-center bg-neutral-200 border-l-4 border-emerald-600 p-4 flex-grow">
          <p className="font-medium">
            <Balancer>
              Ни для кого не секрет, что Россия поддерживает дружественные
              отношения с Сербией. Начало русско-сербских связей отсылает нас
              еще к временам Древней Руси и сербской державы Неманичей.
            </Balancer>
          </p>
        </div>
        <img src="/background.png" alt="" className="md:max-h-48" />
      </div>
      <p className="mt-4">
        <Balancer>
          На протяжении всей истории диалог культур не затихал, особо ярко
          проявился он в религиозной сфере. Отдельной главой и в отечественной
          истории, и в сербской стало начало ХХ в. Вступив в Первую Мировую
          войну союзниками, государства закончили ее по-разному. В уже
          объединенное королевство сербов, хорватов и словенцев (будущая
          Югославия) хлынули тысячи мигрантов из бывшей Российской империи,
          представители белого движения. Стоит отметить, что ключевых фигур этих
          событий – Николая II и Петра Николаевича Врангеля, чтят и помнят по
          сей день. На территории Сербии сохранилось множество памятников
          русского культурного наследия. Благодаря тесному и взаимовыгодному
          сотрудничеству, наши страны и сейчас представляют крепкий союз,
          развивая как экономическое, так и культурное сотрудничество.
        </Balancer>
      </p>
      <h2 className="text-2xl font-semibold mt-8">Объекты</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {facilities.map(({ id, title, description }) => (
          <Link
            key={id}
            to={`/facility/${id}`}
            className="border-l-4 border-emerald-600 bg-neutral-200 p-4 hover:bg-neutral-300 transition-colors duration-200 ease-in-out"
          >
            <h3 className="text-xl font-semibold">
              <Balancer>{title}</Balancer>
            </h3>
            <p className="mt-2">
              <Balancer>
                {description.length > 100
                  ? description.slice(0, 100) + '...'
                  : description}
              </Balancer>
            </p>
          </Link>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mt-8">Интерактивная карта</h2>
      <iframe
        title="map"
        className="mt-4 w-full h-[40dvh]"
        loading="lazy"
        src="https://www.google.com/maps/d/embed?mid=18EuiotWxFd35HtKiJJvVW73eyICUNcs&ehbc=2E312F&noprof=1"
      />
    </main>
  )
}
