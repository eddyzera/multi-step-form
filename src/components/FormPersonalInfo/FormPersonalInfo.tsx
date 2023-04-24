import React from 'react'
import styles from './FormPersonalInfo.module.scss'
import { Button } from '../Button/Button'

export const FormPersonalInfo: React.FunctionComponent = () => {
  return (
    <form action="" className={styles.formPersonalInfoContainer}>
      <div className={styles.formPersonalInfoLabel}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='e.g. Stephen King' />
      </div>
      <div className={styles.formPersonalInfoLabel}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='e.g. Stephen King' />
      </div>
      <div className={styles.formPersonalInfoLabel}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='e.g. Stephen King' />
      </div>
      <div className={styles.submiteContainer}>
        <Button label='Next Step' variant='blue' />
      </div>
    </form>
  )
}