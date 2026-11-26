const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates sign-up form fields and returns sanitized values when valid.
 */
export function validateSignUpForm(form) {
  const fullName = form.fullName.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();

  if (!fullName || !email || !phone || !form.password || !form.confirmPassword) {
    return { isValid: false, error: 'Please fill in all fields to create your account.' };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }

  if (form.password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long.' };
  }

  if (form.password !== form.confirmPassword) {
    return { isValid: false, error: 'Passwords do not match.' };
  }

  return {
    isValid: true,
    error: '',
    sanitized: {
      fullName,
      email,
      phone,
      password: form.password,
    },
  };
}
