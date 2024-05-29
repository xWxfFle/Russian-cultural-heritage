import { facilityLoader, FacilityPage } from './page'

export const facilityRoute = {
  path: '/facility/:facilityId',
  loader: facilityLoader,
  element: <FacilityPage />,
}
