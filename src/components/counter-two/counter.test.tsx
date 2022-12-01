import { render, screen } from '@testing-library/react'

import CounterTwo from './counter'
import user from '@testing-library/user-event'

describe('CounterTwo', () => {
  test('render correctly', () => {
    render(<CounterTwo count={0} />)
    const textElement = screen.getByText('Counter Two')
    expect(textElement).toBeInTheDocument()
  })

  test('handlers are called', () => {
    const increaseCounter = jest.fn()
    const decreaseCounter = jest.fn()
    render(
      <CounterTwo
        count={0}
        handleIncrement={increaseCounter}
        handleDecrement={decreaseCounter}
      />
    )

    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })

    user.click(incrementButton)
    user.click(decrementButton)

    expect(increaseCounter).toHaveBeenCalledTimes(1)
    expect(decreaseCounter).toHaveBeenCalledTimes(1)
  })
})
