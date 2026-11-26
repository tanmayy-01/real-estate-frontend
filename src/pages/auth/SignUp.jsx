import AuthLayout from '@/components/layout/AuthLayout';
import SignUpForm from '@/features/auth/components/SignUpForm';

/**
 * Sign-up page composing the shared auth layout and sign-up form.
 */
export default function SignUp({
  onBackHome,
  onSignInClick,
  onSubmitSuccess,
  onGoogleClick,
  onAppleClick,
}) {
  return (
    <AuthLayout onBackHome={onBackHome}>
      <SignUpForm
        onSignInClick={onSignInClick}
        onSubmitSuccess={onSubmitSuccess}
        onGoogleClick={onGoogleClick}
        onAppleClick={onAppleClick}
      />
    </AuthLayout>
  );
}
