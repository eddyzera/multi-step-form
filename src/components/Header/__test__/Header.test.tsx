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
})