import { AppleIcon, GoogleIcon } from '@/components/icons/SocialIcons';

/**
 * Renders the "or" divider and Google / Apple authentication buttons.
 */
export default function SocialAuthButtons({ onGoogleClick, onAppleClick }) {
  return (
    <>
      <div className="mx-auto my-3 flex max-w-[210px] items-center gap-3">
        <span className="h-px flex-1 bg-neutral-200" />
        <span className="text-xs text-neutral-400">or</span>
        <span className="h-px flex-1 bg-neutral-200" />
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <button
          type="button"
          onClick={onGoogleClick}
          className="flex h-9.5 cursor-pointer items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-3 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>

        <button
          type="button"
          onClick={onAppleClick}
          className="flex h-9.5 cursor-pointer items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-3 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          <AppleIcon />
          <span>Continue with Apple</span>
        </button>
      </div>
    </>
  );
}
