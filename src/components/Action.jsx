import { Link } from "react-router-dom";

/**
 * Buttons and button-shaped links. Hover is a 1px lift plus a colour shift,
 * press is scale(0.97) — no shadow bloom, no 1.1 scale. Hover styles sit behind
 * `@media (hover:hover)` so touch devices rely on :active instead.
 */

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full " +
  "px-6 py-3 font-mono text-[0.72rem] uppercase tracking-label " +
  "transition-[transform,background-color,color,border-color] duration-150 ease-out4 " +
  "active:scale-[0.97] active:duration-75 disabled:pointer-events-none disabled:opacity-55";

const variants = {
  primary:
    "bg-azure text-ink font-medium [@media(hover:hover)]:hover:-translate-y-px [@media(hover:hover)]:hover:bg-frost",
  ghost:
    "border border-lineStrong text-paper [@media(hover:hover)]:hover:-translate-y-px " +
    "[@media(hover:hover)]:hover:border-azure [@media(hover:hover)]:hover:text-azure",
  quiet: "text-muted [@media(hover:hover)]:hover:text-paper px-0 py-1",
};

export default function Action({
  to,
  href,
  variant = "primary",
  className = "",
  children,
  icon,
  ...rest
}) {
  const cls = `${base} ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-150 ease-out4 [@media(hover:hover)]:group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {inner}
    </button>
  );
}
