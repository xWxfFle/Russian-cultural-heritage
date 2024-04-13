import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const HomePageView = React.lazy(() => import('@/pages/HomePage.tsx'))
const FacilityPageView = React.lazy(() => import('@/pages/facility/page'))

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePageView />,
    },
    {
      path: '/facility',
      children: [{ path: ':facilityId', element: <FacilityPageView /> }],
    },
  ])
  return <RouterProvider router={router} />
}
