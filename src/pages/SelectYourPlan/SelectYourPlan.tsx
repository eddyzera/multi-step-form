import React from 'react'
import { Header } from '../../components'
import { FormSelectPlan } from '../../components/FormSelectPlan/FormSelectPlan'

export const SelectYourPlan: React.FunctionComponent = () => {
  return (
    <>
      <Header
        title="Select your plan"
        subTitle="You have the option of monthly or yearly billing."
      />
      <FormSelectPlan />
    </>
  )
}
