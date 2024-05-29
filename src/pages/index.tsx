import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoute } from './create'
import { facilityRoute } from './facility'
import { homeRoute } from './home'

const router = createBrowserRouter([
  {
    path: '/',
    children: [homeRoute, facilityRoute, createRoute],
  },
])

export const Pages = () => <RouterProvider router={router} />
