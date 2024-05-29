export const apiUrl = import.meta.env.VITE_API_URL
export const createFileUrl = (url: string) => `${apiUrl}static/${url}`

export async function fetchApi<T>(path: string): Promise<T> {
  const response = await fetch(`${apiUrl}${path}`)
  return await response.json()
}

export interface Facility {
  id: number
  title: string
  description: string
  date_posted: string
}

export interface DetailedFacility extends Facility {
  model: string | null
  images: string[]
}

export async function getFacilities() {
  return await fetchApi<{ facility: Facility[] }>(`facility`)
}

export async function getFacility(id?: string) {
  return await fetchApi<{ facility: DetailedFacility }>(`facility/${id}`)
}
