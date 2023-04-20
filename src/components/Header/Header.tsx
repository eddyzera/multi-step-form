import React from 'react'
import styles from './Header.module.scss'
import { IHeader } from './types'

export const Header: React.FunctionComponent<IHeader> = ({ title, subTitle }) => {
  return (
    <header className={styles.headerContainer} data-testid="header-component">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </header>
  )
}