import { useState } from "react";

/**
 * Dense grids get no hover motion — 30 chips lifting as the pointer crosses is
 * noise. Only a border shift. Icons fall back to a monogram so a missing or
 * blocked CDN asset never leaves a hole in the grid.
 */
export default function SkillChip({ skillName, skillIcon, level, compact = false }) {
  const [broken, setBroken] = useState(false);
  const showIcon = skillIcon && !broken;

  return (
    <div
      className={`flex items-center gap-3 rounded-lg border border-line bg-panel/50 transition-colors duration-150 hover:border-lineStrong ${
        compact ? "px-3 py-2" : "px-3.5 py-3"
      }`}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center">
        {showIcon ? (
          <img
            src={skillIcon}
            alt=""
            aria-hidden="true"
            width="24"
            height="24"
            loading="lazy"
            onError={() => setBroken(true)}
            className="h-6 w-6 object-contain"
          />
        ) : (
          <span className="flex h-6 w-6 items-center justify-center rounded border border-lineStrong font-mono text-[0.6rem] text-azure">
            {skillName.slice(0, 2).toUpperCase()}
          </span>
        )}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm text-paper">{skillName}</span>
        {level && !compact && (
          <span className="block truncate font-mono text-[0.6rem] uppercase tracking-wider text-muted">
            {level}
          </span>
        )}
      </span>
    </div>
  );
}
