import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import styles from './FormPickAddOns.module.scss'
import { Button } from '../Button/Button'

export const FormPickAddOns: React.FunctionComponent = () => {
  return (
    <form className={styles.formContainer}>
      <Checkbox.Root className={styles.pickAddOnsContainer}>
        <div className={styles.pickAddOnsItem}>
          <Checkbox.Indicator
            className={styles.pickAddOnsIndicator}
            forceMount={true}
          />
          <div className={styles.pickAddOnsLabelContainer}>
            <label>Online service</label>
            <span>Access to multiplayer games</span>
          </div>
          <p className={styles.pickAddOnsPrice}>+$1/mo</p>
        </div>
      </Checkbox.Root>
      <Checkbox.Root className={styles.pickAddOnsContainer}>
        <div className={styles.pickAddOnsItem}>
          <Checkbox.Indicator
            className={styles.pickAddOnsIndicator}
            forceMount={true}
          />
          <div className={styles.pickAddOnsLabelContainer}>
            <label>Larger storage</label>
            <span>Extra 1TB of cloud save</span>
          </div>
          <p className={styles.pickAddOnsPrice}>+$2/mo</p>
        </div>
      </Checkbox.Root>
      <Checkbox.Root className={styles.pickAddOnsContainer}>
        <div className={styles.pickAddOnsItem}>
          <Checkbox.Indicator
            className={styles.pickAddOnsIndicator}
            forceMount={true}
          />
          <div className={styles.pickAddOnsLabelContainer}>
            <label>Customizable profile</label>
            <span>Custom theme on your profile</span>
          </div>
          <p className={styles.pickAddOnsPrice}>+$2/mo</p>
        </div>
      </Checkbox.Root>
      <div className={styles.submitContainer}>
        <Button label="Go Back" shape="anchor" />
        <Button label="Next Step" variant="blue" />
      </div>
    </form>
  )
}
