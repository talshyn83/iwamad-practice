import { useState, type ChangeEvent, type FormEvent, type FocusEvent } from 'react';
import {
  type RegistrationValues,
  validateRegistration,
} from '../lib/validateRegistration';
import { TextField } from '../components/ui/TextField';
import { Button } from '../components/ui/Button';

const initialValues: RegistrationValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
};

export function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    }
  }

  const getFieldError = (field: keyof RegistrationValues) => {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  };

  if (isSubmitted) {
    return <p role="status">Thanks, {values.fullName}. You are registered.</p>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        label="Full name"
        name="fullName"
        type="text"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getFieldError('fullName')}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getFieldError('email')}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getFieldError('password')}
      />

      <TextField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getFieldError('confirmPassword')}
      />

      <div className="field">
        <label className="check">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={values.acceptTerms}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={(touched.acceptTerms || submitAttempted) && errors.acceptTerms ? true : undefined}
          />
          Accept terms and conditions
        </label>
        {(touched.acceptTerms || submitAttempted) && errors.acceptTerms && (
          <p className="field-error">{errors.acceptTerms}</p>
        )}
      </div>

      <Button type="submit">Create account</Button>
    </form>
  );
}