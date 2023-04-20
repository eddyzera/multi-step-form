import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen } from '../../../utils/test/custom-test'
import { Header } from '../Header'

describe('<Header Component />', () => {
  it('should render component without errors', () => {
    render(<Header title='Hello World' subTitle='Hello People' />)

    const header = screen.getByTestId('header-component')

    expect(header).toBeInTheDocument()
  })

  it('should render component with title Mock 01 without errors', () => {
    render(<Header title='Mock 01' subTitle='Hello People' />)
    const title = screen.getByText('Mock 01')
    expect(title).toBeInTheDocument()
  })

  it('should render component with sub title Mock 02 without errors', () => {
    render(<Header title='Mock 01' subTitle='Mock 02' />)
    const title = screen.getByText('Mock 02')
    expect(title).toBeInTheDocument()
  })
})