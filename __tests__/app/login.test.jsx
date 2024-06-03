import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LoginPage from '../../app/(auth)/login/page'
import LoginLayout from '../../app/(auth)/layout'

describe('Login Page', () => {
  it('should render', () => {
    const page = render(
      <LoginLayout>
        <LoginPage />
      </LoginLayout>
    )

    expect(page).toMatchSnapshot()
  })
})