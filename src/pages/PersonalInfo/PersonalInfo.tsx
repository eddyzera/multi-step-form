import React from 'react'
import { FormPersonalInfo, Header } from '../../components'

export const PersonalInfo: React.FunctionComponent = () => {
  return (
    <>
      <Header title='Personal info' subTitle='Please provide your name, email address, and phone number.' />
     <FormPersonalInfo />
    </>
  )
}