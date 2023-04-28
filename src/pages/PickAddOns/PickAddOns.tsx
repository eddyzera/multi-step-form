import React from 'react'
import { Header } from '../../components'
import { FormPickAddOns } from '../../components/FormPickAddOns/FormPickAddOns'

export const PickAddOns: React.FunctionComponent = () => {
  return (
    <>
      <Header
        title="Pick add-ons"
        subTitle="Add-ons help enhance your gaming experience."
      />
      <FormPickAddOns />
    </>
  )
}
