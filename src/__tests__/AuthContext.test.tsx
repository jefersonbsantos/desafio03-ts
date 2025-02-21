import { validateLogin } from '../contexts/AuthContext';

describe('validateLogin', () => {
  it('should return true for valid credentials', () => {
    expect(validateLogin('user@example.com', 'password')).toBe(true);
  });

  it('should return false for invalid email', () => {
    expect(validateLogin('invalid@example.com', 'password')).toBe(false);
  });

  it('should return false for invalid password', () => {
    expect(validateLogin('user@example.com', 'wrongpassword')).toBe(false);
  });

  it('should return false for both invalid email and password', () => {
    expect(validateLogin('invalid@example.com', 'wrongpassword')).toBe(false);
  });
});
