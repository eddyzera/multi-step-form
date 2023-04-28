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
            <span>Access to multiplayer games</span>
          </div>
          <p className={styles.pickAddOnsPrice}>+$1/mo</p>
        </RadioGroup.Item>
        <RadioGroup.Item
          value="Larger storage"
          className={styles.pickAddOnsItem}
        >
          <RadioGroup.Indicator
            className={styles.pickAddOnsIndicator}
            forceMount={true}
          />
          <div className={styles.pickAddOnsLabelContainer}>
            <label>Larger storage</label>
            <span>Extra 1TB of cloud save</span>
          </div>
          <p className={styles.pickAddOnsPrice}>+$2/mo</p>
        </RadioGroup.Item>
        <RadioGroup.Item
          value="Customizable profile"
          className={styles.pickAddOnsItem}
        >
          <RadioGroup.Indicator
            className={styles.pickAddOnsIndicator}
            forceMount={true}
          />
          <div className={styles.pickAddOnsLabelContainer}>
            <label>Customizable profile</label>
            <span>Custom theme on your profile</span>
          </div>
          <p className={styles.pickAddOnsPrice}>+$2/mo</p>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </form>
  )
}
