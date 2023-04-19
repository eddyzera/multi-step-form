import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen } from '../utils/test/custom-test'
import { App } from '../App'

describe('App', () => {
  it('should render without errors', () => {
    render(<App />)
    const appId = screen.getByTestId('app')
    expect(appId).toBeInTheDocument()
  })
})