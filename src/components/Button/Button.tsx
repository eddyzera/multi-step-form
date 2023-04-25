import React from 'react'
import { IButton } from './types'
import styles from './Button.module.scss'

export const Button: React.FunctionComponent<IButton> = ({
  label,
  variant = 'blue',
  shape = 'button',
  ...props
}) => {
  const isAnchorShape = shape === 'anchor' ? 'transparent' : variant
  return (
    <button className={`${styles[shape]} ${styles[isAnchorShape]}`} {...props}>
      {label}
    </button>
  )
}
