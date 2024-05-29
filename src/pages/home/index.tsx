import { homeLoader, HomePage } from './page'

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default {
  index: true,
  loader: homeLoader,
  element: <HomePage />,
}
