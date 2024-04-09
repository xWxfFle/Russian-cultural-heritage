import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

const pages = import.meta.glob<true, string, { default: RouteObject }>(
  './**/index.tsx',
  { eager: true },
)

const routes = Object.values(pages).map((page) => page.default)

const router = createBrowserRouter([
  {
    path: '/',
    children: routes,
  },
])

export const Pages = () => <RouterProvider router={router} />
