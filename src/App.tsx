import React from 'react'
import styles from './App.module.scss'
import { ProviderLayout } from './provider'

export const App: React.FunctionComponent = () => {
  return (
    <div className={styles.appContainer} data-testid="app">
      <ProviderLayout />
    </div>
  )
}