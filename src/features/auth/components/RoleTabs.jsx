import { USER_ROLES } from '@/constants/roles';

/**
 * Horizontal tab selector for choosing an account role.
 */
export default function RoleTabs({ value, onChange, roles = USER_ROLES }) {
  return (
    <div
      role="tablist"
      aria-label="Account role"
      className="mt-3.5 grid grid-cols-3 border-b border-neutral-100"
    >
      {roles.map((item) => {
        const isActive = value === item;
        return (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item)}
            className={`relative cursor-pointer py-2 text-center text-[13px] font-medium transition-all ${
              isActive
                ? 'border-b-2 border-[#8B5CF6] bg-gradient-to-t from-[#EDE9FE] via-[#F5F3FF]/60 to-transparent text-[#8B5CF6]'
                : 'border-b-2 border-transparent text-neutral-600 hover:text-neutral-900'
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
