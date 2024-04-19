import { facilityLoader, FacilityPage } from './page'

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default {
  path: 'facility/:facilityId',
  loader: facilityLoader,
  element: <FacilityPage />,
}
