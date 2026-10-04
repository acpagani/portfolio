/**
 * Projects without screenshots get a drawn cover instead of a stock gradient.
 * Each mark is tied to what the project actually does, so the placeholder still
 * carries information. Decorative — hidden from assistive tech.
 */

function OrbitMark() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <ellipse cx="200" cy="120" rx="150" ry="52" opacity="0.35" />
      <ellipse cx="200" cy="120" rx="112" ry="80" opacity="0.25" />
      <ellipse cx="200" cy="120" rx="66" ry="66" opacity="0.18" />
      <circle cx="200" cy="120" r="7" fill="currentColor" stroke="none" opacity="0.55" />
      <circle cx="322" cy="139" r="4.5" fill="#4C9EFF" stroke="none" />
      <circle cx="288" cy="150" r="4.5" fill="#A9CBFF" stroke="none" />
      <path d="M288 150 L322 139" stroke="#4C9EFF" strokeWidth="1.2" strokeDasharray="3 3" />
    </g>
  );
}

function CurveMark() {
  return (
    <g fill="none" stroke="currentColor">
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="40"
          y1={60 + i * 30}
          x2="360"
          y2={60 + i * 30}
          strokeWidth="1"
          opacity="0.14"
        />
      ))}
      <path
        d="M40 168 L96 152 L152 158 L208 120 L264 128 L320 74 L360 58"
        stroke="#4C9EFF"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M40 176 L96 172 L152 170 L208 160 L264 156 L320 146 L360 142"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="4 4"
        opacity="0.5"
      />
      <circle cx="360" cy="58" r="4.5" fill="#4C9EFF" stroke="none" />
    </g>
  );
}

function ScatterMark() {
  const dots = [
    [72, 168], [104, 150], [128, 176], [156, 142], [184, 166], [206, 132],
    [238, 158], [262, 120], [286, 148], [308, 106], [332, 136], [96, 118],
    [140, 106], [190, 94], [246, 88], [300, 72],
  ];
  return (
    <g>
      <line x1="52" y1="188" x2="360" y2="188" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <line x1="52" y1="188" x2="52" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="currentColor" opacity="0.28" />
      ))}
      <circle cx="326" cy="66" r="5.5" fill="#4C9EFF" />
      <circle cx="326" cy="66" r="14" fill="none" stroke="#4C9EFF" strokeWidth="1" opacity="0.5" />
      <circle cx="344" cy="90" r="4" fill="#A9CBFF" />
    </g>
  );
}

const MARKS = {
  orbitshield: OrbitMark,
  "dashboard-patrimonial": CurveMark,
  "previsao-erupcoes-solares": ScatterMark,
};

export default function ProjectCover({ slug, label, className = "" }) {
  const Mark = MARKS[slug] || CurveMark;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-panel2 via-panel to-abyss ${className}`}>
      <svg
        viewBox="0 0 400 240"
        className="h-full w-full text-frost/70"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <Mark />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-4 font-mono text-[0.6rem] uppercase tracking-label text-muted">
          {label}
        </span>
      )}
    </div>
  );
}
