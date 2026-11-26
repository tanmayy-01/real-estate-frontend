import { useState } from 'react';
import { Lock, Mail, Phone, User } from 'lucide-react';
import FormInput from '@/components/ui/FormInput';
import { DEFAULT_USER_ROLE } from '@/constants/roles';
import RoleTabs from '@/features/auth/components/RoleTabs';
import SocialAuthButtons from '@/features/auth/components/SocialAuthButtons';
import { validateSignUpForm } from '@/features/auth/utils/validation';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

const SIGNUP_FIELDS = [
  {
    key: 'fullName',
    id: 'signup-full-name',
    label: 'Full Name',
    type: 'text',
    autoComplete: 'name',
    placeholder: 'Enter Name',
    icon: User,
  },
  {
    key: 'email',
    id: 'signup-email',
    label: 'Email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Enter Email',
    icon: Mail,
  },
  {
    key: 'phone',
    id: 'signup-phone',
    label: 'Phone number',
    type: 'tel',
    autoComplete: 'tel',
    placeholder: 'Enter Phone number',
    icon: Phone,
  },
  {
    key: 'password',
    id: 'signup-password',
    label: 'Password',
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Enter Password',
    icon: Lock,
    isPassword: true,
  },
  {
    key: 'confirmPassword',
    id: 'signup-confirm-password',
    label: 'Confirm Password',
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Enter Confirm Password',
    icon: Lock,
    isPassword: true,
  },
];

/**
 * Interactive sign-up card content with role tabs, validation, and OAuth options.
 */
export default function SignUpForm({
  onSignInClick,
  onSubmitSuccess,
  onGoogleClick,
  onAppleClick,
}) {
  const [role, setRole] = useState(DEFAULT_USER_ROLE);
  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (error) setError('');
    if (submittedMessage) setSubmittedMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSubmittedMessage('');

    const result = validateSignUpForm(form);
    if (!result.isValid) {
      setError(result.error);
      return;
    }

    const payload = { role, ...result.sanitized };

    if (onSubmitSuccess) {
      onSubmitSuccess(payload);
    } else {
      setSubmittedMessage(`Account ready for ${payload.fullName} (${role}).`);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-xl font-medium tracking-tight text-neutral-900 sm:text-2xl">
          Create Your Account
        </h1>
        <p className="mt-1 text-[12.5px] leading-snug text-neutral-500">
          Sign up to explore properties, manage listings, and connect with
          clients — all in one place.
        </p>
      </div>

      <RoleTabs value={role} onChange={setRole} />

      <form onSubmit={handleSubmit} noValidate className="mt-3.5 space-y-2.5">
        {SIGNUP_FIELDS.map((field) => (
          <FormInput
            key={field.key}
            id={field.id}
            name={field.key}
            label={field.label}
            type={field.type}
            autoComplete={field.autoComplete}
            placeholder={field.placeholder}
            icon={field.icon}
            isPassword={field.isPassword}
            value={form[field.key]}
            onChange={handleChange(field.key)}
          />
        ))}

        {error && (
          <p role="alert" className="text-xs font-medium text-red-600">
            {error}
          </p>
        )}

        {submittedMessage && (
          <p role="status" className="text-xs font-medium text-emerald-600">
            {submittedMessage}
          </p>
        )}

        <button
          type="submit"
          className="mt-1 h-10 w-full cursor-pointer rounded-xl bg-[#8B5CF6] text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#7C3AED] active:bg-[#6D28D9]"
        >
          Sign Up
        </button>
      </form>

      <SocialAuthButtons onGoogleClick={onGoogleClick} onAppleClick={onAppleClick} />

      <p className="mt-3.5 text-center text-[12.5px] text-neutral-700">
        Already have an account?{' '}
        <a
          href="#signin"
          onClick={(e) => {
            if (onSignInClick) {
              e.preventDefault();
              onSignInClick();
            }
          }}
          className="font-medium text-[#8B5CF6] transition-colors hover:text-[#7C3AED] hover:underline"
        >
          Sign In
        </a>
      </p>
    </>
  );
}
