import React from 'react'
import styles from './App.module.scss'
import { ProviderRouter } from './provider'

export const App: React.FunctionComponent = () => {
  return (
    <div className={styles.appContainer} data-testid="app">
      <ProviderRouter />
    </div>
  )
}