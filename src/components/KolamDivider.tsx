"use client";

/**
 * A hand-drawn-style kolam (South Indian threshold rangoli) motif.
 * Used as the site's signature element: on the loading screen (drawing itself),
 * and as a quiet ornamental divider between text blocks in each scene.
 */
export function KolamDivider({
  animated = false,
  className = "",
}: {
  animated?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#B8863B" strokeWidth="1.1" strokeLinecap="round">
        <path
          d="M10 20 C 10 12, 18 8, 26 12 C 34 16, 34 24, 26 28 C 18 32, 10 28, 10 20 Z"
          strokeDasharray={animated ? "160" : undefined}
          className={animated ? "animate-kolam-draw" : ""}
        />
        <circle cx="18" cy="20" r="2" fill="#B8863B" stroke="none" />
        <path d="M40 20 H 90" opacity="0.7" />
        <circle cx="120" cy="20" r="6" />
        <circle cx="120" cy="20" r="2.2" fill="#B8863B" stroke="none" />
        <path
          d="M105 20 C 105 12, 113 8, 120 8 C 127 8, 135 12, 135 20 C 135 28, 127 32, 120 32 C 113 32, 105 28, 105 20 Z"
          opacity="0.5"
        />
        <path d="M150 20 H 200" opacity="0.7" />
        <path
          d="M214 20 C 214 12, 222 8, 230 12 C 238 16, 238 24, 230 28 C 222 32, 214 28, 214 20 Z"
        />
        <circle cx="222" cy="20" r="2" fill="#B8863B" stroke="none" />
      </g>
    </svg>
  );
}
