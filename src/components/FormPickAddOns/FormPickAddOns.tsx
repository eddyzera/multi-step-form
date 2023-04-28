import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styles from './FormPickAddOns.module.scss'

export const FormPickAddOns: React.FunctionComponent = () => {
  return (
    <form className={styles.formContainer}>
      <RadioGroup.Root className={styles.pickAddOnsContainer}>
        <RadioGroup.Item
          value="online service"
          className={styles.pickAddOnsItem}
        >
          <RadioGroup.Indicator
            className={styles.pickAddOnsIndicator}
            forceMount={true}
          />
          <div className={styles.pickAddOnsLabelContainer}>
            <label>Online service</label>
            <p>Access to multiplayer games</p>
          </div>
          <p className={styles.pickAddOnsPrice}>+$1/mo</p>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </form>
  )
}
