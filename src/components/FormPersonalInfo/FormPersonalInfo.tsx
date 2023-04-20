import React from 'react'
import styles from './FormPersonalInfo.module.scss'

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
    </form>
  )
}