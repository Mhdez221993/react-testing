import { render, screen } from '@testing-library/react'

import Counter from './counter'
import user from '@testing-library/user-event'

describe('Counter', () => {
  test('render correctly', () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementButton).toBeInTheDocument()
  })

  test('render count value of 0', () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  test('render count of 1 after incrementing', async () => {
    // user.setup()
    render(<Counter />)

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.click(incrementButton)

    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  test('render count of 2 after incrementing twice', () => {
    // user.setup()
    render(<Counter />)

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })

    // user.click(incrementButton)
    user.dblClick(incrementButton)
    // user.tripleClick(incrementButton)

    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('2')
  })

  test('render amount of 10 after innput 10 and clicking set value', () => {
    render(<Counter />)

    // input value 10
    const amountInput = screen.getByRole('spinbutton')
    user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)

    // click set count button
    const buttonElement = screen.getByRole('button', {
      name: 'Set Count',
    })
    user.click(buttonElement)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  test('elements are focused in the right order', () => {
    render(<Counter />)

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', {
      name: 'Set Count',
    })

    user.tab()
    expect(incrementButton).toHaveFocus()

    user.tab()
    expect(amountInput).toHaveFocus()

    user.tab()
    expect(setButton).toHaveFocus()
  })
})

// Poiter interactions
// Poinster APIs

// poider({key:'[MouseLeft]'}) left click is simulated

// poider({key:'[MouseLeft][MouseRight]'}) simulate a left click followed by a right click

// poider({'[MouseLeft][MouseRight]'}) same as before

// poider({'[MouseLeft>]'}) left click without releasing it

// poider({'[/MouseLeft]'}) relasing a privous click left
