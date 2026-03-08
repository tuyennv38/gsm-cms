import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import ProfilePage from '@/app/dashboard/profile/page'
import { mockUser } from '@/lib/mock-data'

// Mock the alert since it's not implemented in jsdom
const originalAlert = window.alert;

beforeAll(() => {
  window.alert = jest.fn()
})

afterAll(() => {
  window.alert = originalAlert
})

describe('Profile Page', () => {
  /**
   * @implements test:profile-page-render-0001
   * @implements task:build-profile-page-0013
   */
  it('should render profile information correctly from mock data', () => {
    // Render the component
    render(<ProfilePage />)

    // Check if titles are rendered
    expect(screen.getByText('Thông tin tài khoản')).toBeInTheDocument()
    
    // Check if the mockUser displays its info on the screen
    // It appears twice per mock data fields: once in the big banner, once in the detail view
    const nameElements = screen.getAllByText(mockUser.name)
    expect(nameElements.length).toBeGreaterThanOrEqual(1)

    const roleElements = screen.getAllByText(mockUser.role)
    expect(roleElements.length).toBeGreaterThanOrEqual(1)

    const statusElements = screen.getAllByText(mockUser.status)
    expect(statusElements.length).toBeGreaterThanOrEqual(1)

    const emailElements = screen.getAllByText(mockUser.email)
    expect(emailElements.length).toBeGreaterThanOrEqual(1)
  })

  /**
   * @implements test:profile-page-edit-btn-0002
   * @implements task:build-profile-page-0013
   */
  it('should call window.alert when clicking "Chỉnh sửa" button', () => {
    render(<ProfilePage />)

    const btn = screen.getByRole('button', { name: /chỉnh sửa/i })
    expect(btn).toBeInTheDocument()

    fireEvent.click(btn)

    // Using the mocked window.alert
    expect(window.alert).toHaveBeenCalledWith("Chức năng đang phát triển")
  })
})
