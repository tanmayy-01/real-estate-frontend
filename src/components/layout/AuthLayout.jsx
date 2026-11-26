import { ChevronLeft } from 'lucide-react';
import authBgImage from '@/assets/auth_bg_image.jpg';

const DEFAULT_TAGLINE =
  'Join a platform that connects buyers, agents, and developers to simplify every step of the real estate journey.';

/**
 * Shared split-screen layout for authentication pages (Sign Up, Sign In, etc.).
 */
export default function AuthLayout({
  children,
  onBackHome,
  tagline = DEFAULT_TAGLINE,
}) {
  return (
    <div
      className="relative min-h-screen w-full bg-slate-950 bg-cover bg-center bg-no-repeat lg:h-dvh lg:overflow-hidden"
      style={{ backgroundImage: `url(${authBgImage})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/35 via-transparent to-slate-950/40" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-between gap-6 p-4 sm:p-5 lg:h-full lg:min-h-0 lg:flex-row lg:items-stretch lg:gap-8 lg:p-5">
        {/* Left Promotional Panel */}
        <div className="flex flex-1 flex-col justify-between px-2 py-2 text-white lg:px-6 lg:py-4">
          <header className="flex items-center justify-between gap-4">
            <a
              href="#home"
              onClick={(e) => {
                if (onBackHome) {
                  e.preventDefault();
                  onBackHome();
                }
              }}
              className="text-xl font-medium tracking-tight text-white transition-opacity hover:opacity-85 sm:text-2xl"
            >
              Real Estate
            </a>

            <button
              type="button"
              onClick={onBackHome}
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-normal text-white/90 transition-opacity hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
              <span>Back to home</span>
            </button>
          </header>

          <div className="my-6 max-w-xl lg:my-0 lg:pb-4">
            <h2 className="text-2xl leading-[1.32] font-normal tracking-[-0.01em] text-white sm:text-3xl lg:text-[1.9rem]">
              {tagline}
            </h2>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="flex w-full items-center justify-center lg:h-full lg:w-[46%] lg:max-w-[560px]">
          <div className="w-full rounded-[26px] bg-white px-6 py-5 shadow-2xl shadow-black/30 sm:px-9 sm:py-6 lg:max-h-full lg:overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
