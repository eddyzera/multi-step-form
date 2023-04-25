import React from 'react'
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from 'react-router-dom'
import { ProviderLayout } from '../ProviderLayout/ProviderLayout'
import { PersonalInfo } from '../../pages/PersonalInfo/PersonalInfo'
import { SelectYourPlan } from '../../pages/SelectYourPlan/SelectYourPlan'

export const ProviderRouter = () => {
  const routerProvider = createBrowserRouter([
    {
      path: '/',
      element: <ProviderLayout />,
      children: [
        {
          path: '',
          element: <PersonalInfo />,
        },
        {
          path: 'select-plan',
          element: <SelectYourPlan />,
        },
      ],
    },
  ])
  return <Provider router={routerProvider} />
}
