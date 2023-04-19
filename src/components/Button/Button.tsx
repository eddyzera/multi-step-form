import React from 'react'
import { IButton } from './types'
import styles from './Button.module.scss'

export const Button: React.FunctionComponent<IButton> = ({ label, variant, ...props }) => {
  return <button className={styles.buttonContainer} {...props}>{label}</button>
}