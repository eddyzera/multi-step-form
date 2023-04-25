import React from 'react'
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from 'react-router-dom'
import { ProviderLayout } from '../ProviderLayout/ProviderLayout'
import { PersonalInfo } from '../../pages/PersonalInfo/PersonalInfo'
import { SelectYourPlan } from '../../pages/SelectYourPlan/SelectYourPlan'
import { PickAddOns } from '../../pages/PickAddOns/PickAddOns'

export const ProviderRouter: React.FunctionComponent = () => {
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
        {
          path: 'pick-addons',
          element: <PickAddOns />,
        },
      ],
    },
  ])
  return <Provider router={routerProvider} />
}
