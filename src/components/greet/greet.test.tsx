import { render, screen } from '@testing-library/react'

import Greet from './Greet'

describe('Greet', () => {
  test('get by text', () => {
    render(<Greet />)
    const greet = screen.getByText('Hello')
    expect(greet).toBeInTheDocument()
  })

  test('get by text with props', () => {
    render(<Greet name="Doe" />)
    const greet = screen.getByText('Hello Doe')
    expect(greet).toBeInTheDocument()
  })
})
