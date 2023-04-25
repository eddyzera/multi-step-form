import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Switch from '@radix-ui/react-switch'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import styles from './FormSelectPlan.module.scss'

const createSelectPlanSchema = z.object({
  type: z.enum(['arcade', 'advanced', 'pro']),
  switch: z.enum(['monthly', 'yearly'])
})

type CreateSelectPlanFormData = z.infer<typeof createSelectPlanSchema>

export const FormSelectPlan: React.FunctionComponent = () => {

  const { handleSubmit, control } = useForm<CreateSelectPlanFormData>({
    resolver: zodResolver(createSelectPlanSchema),
    defaultValues: {
      type: 'arcade'
    }
  })

  const handleCreatePlan = (data: CreateSelectPlanFormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleCreatePlan)}>
      <Controller 
        control={control}
        name='type' 
        render={({ field }) => {
          return (
              <RadioGroup.Root 
                className={styles.radioGroupContainer} 
                onValueChange={field.onChange}
                value={field.value}
              >
                <RadioGroup.Item value="arcade" className={styles.radioGroupItem}>
                  <i className={`${styles.iconGroup} ${styles.arcadeIcon}`}></i>
                  <div className={styles.containerFlex}>
                    <p>Arcade</p>
                    <small>$9/mo</small>
                  </div>
                </RadioGroup.Item>
                <RadioGroup.Item value="advanced" className={styles.radioGroupItem}>
                  <i className={`${styles.iconGroup} ${styles.advancedIcon}`}></i>
                  <div className={styles.containerFlex}>
                    <p>Advanced</p>
                    <small>$12/mo</small>
                  </div>
                </RadioGroup.Item>
                <RadioGroup.Item value="pro" className={styles.radioGroupItem}>
                  <i className={`${styles.iconGroup} ${styles.proIcon}`}></i>
                  <div className={styles.containerFlex}>
                    <p>Pro</p>
                    <small>$15/mo</small>
                  </div>
                </RadioGroup.Item>
            </RadioGroup.Root>
          )
        }}
      />
      <div className={styles.switchContainer}>
        <Controller
          control={control} 
          name="switch"
          render={({ field }) => {
            return (
              <>
                <label htmlFor="choose">Monthly</label>
                  <Switch.Root
                    className={styles.switchRoot}
                    id="choose"
                    onCheckedChange={field.onChange}
                    value={field.value}
                  >
                    <Switch.Thumb className={styles.switchThumb}  />
                  </Switch.Root>
                <label htmlFor="choose">Yearly</label>
              </>
            )
          }}
        />
      </div>
    </form>
  )
}