import { type LoaderFunctionArgs, useLoaderData } from 'react-router-dom'

export const facilityLoader = async ({
  params,
}: LoaderFunctionArgs<string>) => {
  return params.facilityId
}

export const FacilityPage = () => {
  const facilityId = useLoaderData()

  if (!facilityId) return null

  return <div>Facility Page {facilityId.toString()}</div>
}
