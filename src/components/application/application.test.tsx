import { render, screen } from '@testing-library/react'

import { Application } from './Application'

describe('Application', () => {
  test('get by role (texbox, combobox, checkbox)', () => {
    render(<Application />)

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationelement = screen.getByRole('combobox')
    expect(jobLocationelement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()
  })

  test('get by label text (input, checkbox)', () => {
    render(<Application />)

    const nameLabel = screen.getByLabelText('Name')
    expect(nameLabel).toBeInTheDocument()

    const termsLabel = screen.getByLabelText(
      'I agree to the terms and conditions'
    )
    expect(termsLabel).toBeInTheDocument()
  })

  test('get by role (heading)', () => {
    render(<Application />)

    const pageHeading = screen.getByRole('heading', {
      level: 1,
      name: 'Job application form',
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
      name: 'Section 1',
    })
    expect(sectionHeading).toBeInTheDocument()
  })

  test('get by role (button)', () => {
    render(<Application />)

    const submitButton = screen.getByRole('button')

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })

  test('get by placeholder (input)', () => {
    render(<Application />)
    const namePlaceHolder = screen.getByPlaceholderText('Fullname')
    expect(namePlaceHolder).toBeInTheDocument()
  })

  test('get by text (p)', () => {
    render(<Application />)
    const paragraphText = screen.getByText('All fields are mandatory')
    expect(paragraphText).toBeInTheDocument()
  })

  test('get by display value (input)', () => {
    render(<Application />)
    const inputValue = screen.getByDisplayValue('Doe')
    expect(inputValue).toBeInTheDocument()
  })

  test('get by alt text (img)', () => {
    render(<Application />)
    const imgAltText = screen.getByAltText('a person with a laptop')
    expect(imgAltText).toBeInTheDocument()
  })

  test('get by title (span)', () => {
    render(<Application />)
    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()
  })

  test('get by test id (div)', () => {
    render(<Application />)
    const customeElement = screen.getByTestId('custom-element')
    expect(customeElement).toBeInTheDocument()
  })

  test('string match with regex, custome func', () => {
    render(<Application />)
    const paragraphText1 = screen.getByText((string) =>
      string.startsWith('All')
    )
    expect(paragraphText1).toBeInTheDocument()

    const paragraphText2 = screen.getByText(/^All fields are mandatory$/i)
    expect(paragraphText2).toBeInTheDocument()

    const paragraphText3 = screen.getByText(/all/i)
    expect(paragraphText3).toBeInTheDocument()

    const paragraphText4 = screen.getByText(/All/)
    expect(paragraphText4).toBeInTheDocument()
  })
})
