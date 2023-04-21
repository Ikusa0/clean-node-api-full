import { SignUpController } from './signup'

describe('SingUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      email: 'adoleta@email.com',
      password: 'adoleta123',
      passwordConfirmation: 'adoleta123'
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
