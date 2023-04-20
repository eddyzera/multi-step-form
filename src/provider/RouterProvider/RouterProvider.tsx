import React from 'react'
import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom'
import { ProviderLayout } from '../ProviderLayout/ProviderLayout'
import { PersonalInfo } from '../../pages/PersonalInfo/PersonalInfo'

export const ProviderRouter = () => {

  const routerProvider = createBrowserRouter([
    {
      path: '/',
      element: <ProviderLayout />,
      children: [
        {
          path: '',
          element: <PersonalInfo />
        }
      ]
    }
  ])
  return (
    <Provider router={routerProvider} />
  )
}