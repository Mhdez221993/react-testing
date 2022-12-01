import { render, screen } from '@testing-library/react'

import Skills from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'Ruby', 'JS']

  test('get by role list (ul)', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('get all by role (li)', () => {
    render(<Skills skills={skills} />)
    const listElements = screen.getAllByRole('listitem')
    expect(listElements).toHaveLength(skills.length)
  })

  test('render Login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    })
    expect(loginButton).toBeInTheDocument()
  })

  test('no render start learning button', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />)
    // const view = render(<Skills skills={skills} />)
    // logRoles(view.container)

    // screen.debug()
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 300,
      }
    )
    // screen.debug()
    // logRoles(view.container)

    expect(startLearningButton).toBeInTheDocument()
  })
})
