import { expect, test } from 'vitest';
import { validateSignup } from './validateSignup';

test('1. valid signup - nothing changed', () => {
  const errors = validateSignup({ fullName: 'Aliya Nurlanovna', email: 'aliya@example.com', tickets: '2' }, 10);
  expect(errors).toEqual({});
});

test('2. tickets: 0', () => {
  const errors = validateSignup({ fullName: 'Aliya Nurlanovna', email: 'aliya@example.com', tickets: '0' }, 10);
  expect(errors.tickets).toBe('Choose 1 to 4 tickets');
});

test('3. tickets: 5', () => {
  const errors = validateSignup({ fullName: 'Aliya Nurlanovna', email: 'aliya@example.com', tickets: '5' }, 10);
  expect(errors.tickets).toBe('Choose 1 to 4 tickets');
});

test('4. tickets: 1.5', () => {
  const errors = validateSignup({ fullName: 'Aliya Nurlanovna', email: 'aliya@example.com', tickets: '1.5' }, 10);
  expect(errors.tickets).toBe('Choose 1 to 4 tickets');
});

test('5. tickets: 4', () => {
  const errors = validateSignup({ fullName: 'Aliya Nurlanovna', email: 'aliya@example.com', tickets: '4' }, 10);
  expect(errors).toEqual({});
});

test('6. tickets: 3 and seatsLeft 2', () => {
  const errors = validateSignup({ fullName: 'Aliya Nurlanovna', email: 'aliya@example.com', tickets: '3' }, 2);
  expect(errors.tickets).toBe('Only 2 seats left');
});