import { describe, it, expect } from 'vitest';
import { validateRegistration, type RegistrationValues } from './validateRegistration';

const validValues: RegistrationValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  password: 'almaty2026',
  confirmPassword: 'almaty2026',
  acceptTerms: true,
};

describe('validateRegistration', () => {
  it('1 returns no errors for valid values', () => {
    const errors = validateRegistration(validValues);
    expect(errors).toEqual({});
  });

  it('2 rejects a name that is only spaces', () => {
    const errors = validateRegistration({ ...validValues, fullName: '   ' });
    expect(errors.fullName).toBe('Enter your full name');
  });

  it('3 rejects invalid email format', () => {
    const errors = validateRegistration({ ...validValues, email: 'aliya@example' });
    expect(errors.email).toBe('Enter a valid email, like name@example.com');
  });

  it('4 accepts valid password almaty26', () => {
    const errors = validateRegistration({
      ...validValues,
      password: 'almaty26',
      confirmPassword: 'almaty26',
    });
    expect(errors).toEqual({});
  });

  it('5 rejects password under 8 characters', () => {
    const errors = validateRegistration({
      ...validValues,
      password: 'almaty2',
      confirmPassword: 'almaty2',
    });
    expect(errors.password).toBe('Use at least 8 characters');
  });

  it('6 rejects password without digits', () => {
    const errors = validateRegistration({
      ...validValues,
      password: 'almatycity',
      confirmPassword: 'almatycity',
    });
    expect(errors.password).toBe('Include at least one number');
  });

  it('7 rejects mismatching passwords', () => {
    const errors = validateRegistration({
      ...validValues,
      confirmPassword: 'almaty2027',
    });
    expect(errors.confirmPassword).toBe('Passwords do not match');
  });

  it('8 rejects unaccepted terms', () => {
    const errors = validateRegistration({ ...validValues, acceptTerms: false });
    expect(errors.acceptTerms).toBe('Accept the terms to continue');
  });
});