import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Switch from '@radix-ui/react-switch'
import styles from './FormSelectPlan.module.scss'

export const FormSelectPlan: React.FunctionComponent = () => {
  return (
    <form action="">
      <RadioGroup.Root className={styles.radioGroupContainer} onValueChange={(event) => console.log(event)}>
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
      <div className={styles.switchContainer}>
        <label htmlFor="choose">Monthly</label>
        <Switch.Root className={styles.switchRoot} id="choose" onCheckedChange={(event) => console.log(event)}>
          <Switch.Thumb className={styles.switchThumb}  />
        </Switch.Root>
        <label htmlFor="choose">Yearly</label>
      </div>
    </form>
  )
}