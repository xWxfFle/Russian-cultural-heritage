import useEmblaCarousel from 'embla-carousel-react'
import { Link, type LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import Balancer from 'react-wrap-balancer'
import { createFileUrl, DetailedFacility, getFacility } from '@/shared/api'
import { prop } from '@/shared/lib'
import { useDotButton } from '@/shared/ui/dot-buttons'
import { Scene } from './ui/scene'

export const facilityLoader = async ({ params }: LoaderFunctionArgs<string>) =>
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  prop('facility')(await getFacility(params.facilityId)) ?? null

export const FacilityPage = () => {
  const facility = useLoaderData() as DetailedFacility | null
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  if (!facility)
    return (
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold">
          <Balancer>Памятник не найден</Balancer>
        </h1>
        <Link to="/" className="text-emerald-600 font-medium">
          На главную
        </Link>
      </main>
    )
  const { title, description, model, images } = facility

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">
        <Balancer>{title}</Balancer>
      </h1>
      <p className="mt-4">
        <Balancer>{description}</Balancer>
      </p>
      {model && (
        <div className="w-full h-[40dvh] bg-neutral-200 mt-4 mb-8 border-l-4 border-emerald-600">
          <Scene model={model} />
        </div>
      )}
      <section className="embla mt-4">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image) => (
              <div key={image} className="embla__slide ">
                <img
                  src={createFileUrl(image)}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="embla__controls">
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <button
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : '',
                )}
              />
            ))}
          </div>
        </div>
      </section>
      <Link to="/" className="text-emerald-600 font-medium">
        На главную
      </Link>
    </main>
  )
}
