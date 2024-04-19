import { Link, type LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import Balancer from 'react-wrap-balancer'
import { facilities } from '../home/page'
import { Scene } from './ui/scene'

export const facilityLoader = async ({
  params,
}: LoaderFunctionArgs<string>) => {
  const facility = facilities.find(
    ({ id }) => id.toString() === params.facilityId,
  )
  return facility
}

export const FacilityPage = () => {
  const facility = useLoaderData()

  if (!facility) return null

  const { title, description } = facility as (typeof facilities)[number]

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-xl xl:text-3xl font-semibold">
        <Balancer>{title}</Balancer>
      </h1>
      <p className="xl:text-xl mt-4">
        <Balancer>{description}</Balancer>
      </p>
      <div className="w-full h-[50dvh] bg-neutral-200 mt-4  mb-8 border-l-4 border-red-500">
        <Scene />
      </div>
      <Link to="/" className="text-red-500 xl:text-xl font-medium">
        На главную
      </Link>
    </main>
  )
}
