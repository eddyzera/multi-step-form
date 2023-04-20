import React from 'react'
import styles from './Steps.module.scss'

export const Steps: React.FunctionComponent = () => {
  return (
    <div className={styles.stepContainer}>
      <div className={styles.steps}>
        <div className={styles.stepNumberActive}>
          1
        </div>
        <div className={styles.stepContent}>
          <span>step 1</span>
          <p>your info</p>
        </div>
      </div>
      <div className={styles.steps}>
        <div className={styles.stepNumber}>
          1
        </div>
        <div className={styles.stepContent}>
          <span>step 1</span>
          <p>your info</p>
        </div>
      </div>
    </div>
  )
}