import React from 'react'
import styles from  './ProviderLayout.module.scss'
import { Steps } from '../../components'

export const ProviderLayout: React.FunctionComponent = () => {
  return (
    <section className={styles.providerLayoutContainer}>
      <Steps />
    </section>
  )
}