import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './ProviderLayout.module.scss'
import { Steps } from '../../components'

export const ProviderLayout: React.FunctionComponent = () => {
  return (
    <section className={styles.providerLayoutContainer}>
      <Steps />
      <div className={styles.providerLayoutPage}>
        <Outlet />
      </div>
    </section>
  )
}
