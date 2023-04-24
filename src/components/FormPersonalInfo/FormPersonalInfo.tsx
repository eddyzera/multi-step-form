import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styles from './FormPersonalInfo.module.scss'
import { Button } from '../Button/Button'

const createPersonalInfoSchema = z.object({
  name: z.string().toLowerCase().nonempty('This field is required'),
  email: z.string().email('invalid email').nonempty('This field is required'),
  phone: z.string().nonempty('This field is required')
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
      <div className={`${styles.formPersonalInfoLabel} ${errors.name ? styles.errorContainer : ''}`}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='e.g. Stephen King' {...register('name')}/>
        {errors.name && <span className={styles.errorContent}>{errors.name.message}</span>}
      </div>
      <div className={`${styles.formPersonalInfoLabel} ${errors.email ? styles.errorContainer : ''}`}>
        <label htmlFor="">Email Address</label>
        <input type="email" placeholder='e.g. stephenking@lorem.com' {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className={`${styles.formPersonalInfoLabel} ${errors.phone ? styles.errorContainer : ''}`}>
        <label htmlFor="">Phone Number</label>
        <input type="text" placeholder='e.g. +1 234 567 890' {...register('phone')} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <div className={styles.submiteContainer}>
        <Button label='Next Step' variant='blue' />
      </div>
    </form>
  )
}