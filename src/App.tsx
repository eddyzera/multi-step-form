import React from 'react'
import styles from './App.module.scss'

export const App: React.FunctionComponent = () => {
  return (
    <div className={styles.appContainer}>
      <section>
        <h1>hello world</h1>
      </section>
    </div>
  )
}