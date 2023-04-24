import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styles from './FormPersonalInfo.module.scss'
import { Button } from '../Button/Button'

const createPersonalInfoSchema = z.object({
  name: z.string().min(3).toLowerCase().nonempty(),
  email: z.string().email('Formato de e-mail invalido').nonempty(),
  phone: z.string().nonempty()
})

type CreatePersonalInformationFormData = z.infer<typeof createPersonalInfoSchema>

export const FormPersonalInfo: React.FunctionComponent = () => {
  const { register, handleSubmit, formState: { errors }  } = useForm<CreatePersonalInformationFormData>({
    resolver: zodResolver(createPersonalInfoSchema)
  })

  const handlePersonalInfo = (data: CreatePersonalInformationFormData) => {
    console.log(data)
  }

  return (
    <form className={styles.formPersonalInfoContainer} onSubmit={handleSubmit(handlePersonalInfo)} >
      <div className={styles.formPersonalInfoLabel}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='e.g. Stephen King' {...register('name')}/>
      </div>
      <div className={styles.formPersonalInfoLabel}>
        <label htmlFor="">Email Address</label>
        <input type="text" placeholder='e.g. stephenking@lorem.com' {...register('email')} />
      </div>
      <div className={styles.formPersonalInfoLabel}>
        <label htmlFor="">Phone Number</label>
        <input type="text" placeholder='e.g. +1 234 567 890' {...register('phone')} />
      </div>
      <div className={styles.submiteContainer}>
        <Button label='Next Step' variant='blue' />
      </div>
    </form>
  )
}