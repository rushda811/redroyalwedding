import type { SVGProps } from "react";

/**
 * Persian / Arabic line-art motifs. Stroke inherits currentColor so callers
 * set colour with semantic token classes (e.g. text-gold).
 */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 0.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Central carpet medallion (shamsa). */
export function MedallionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <g {...base}>
        <path d="M24 3c4 7 9 10 17 11-7 3-11 8-13 15-2-7-6-12-13-15 8-1 13-4 13-11Z" opacity="0" />
        <path d="M24 4c3.5 6.5 8 9.5 14 10.5-4 5-5.5 10-4.5 16.5C27 28 21 28 14.5 31c1-6.5-.5-11.5-4.5-16.5C16 13.5 20.5 10.5 24 4Z" />
        <circle cx="24" cy="24" r="7.5" />
        <circle cx="24" cy="24" r="3" />
        <path d="M24 44c-6-4-9-8-9-13M24 44c6-4 9-8 9-13" />
      </g>
    </svg>
  );
}

/** Boteh / paisley — the ancestor of the carpet motif. */
export function BotehIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <g {...base}>
        <path d="M26 44c-9 0-15-6-15-14 0-9 7-14 12-19C27 6 34 5 38 9c-6 0-9 4-9 8 0 6 8 8 8 16 0 7-5 11-11 11Z" />
        <path d="M25 38c-5 0-8-3.5-8-8 0-5 4-8 7-11" opacity="0.7" />
        <circle cx="25" cy="29" r="3" opacity="0.65" />
      </g>
    </svg>
  );
}

/** Pointed arch (iwan) with a hanging lamp. */
export function ArchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <g {...base}>
        <path d="M8 44V22c0-9 7-16 16-16s16 7 16 16v22" />
        <path d="M13 44V23c0-7 5-12 11-12s11 5 11 12v21" opacity="0.55" />
        <path d="M24 6V2" />
        <path d="M24 14v6M21 24h6l-3 6-3-6Z" opacity="0.8" />
      </g>
    </svg>
  );
}

/** Eight-point girih star. */
export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <g {...base}>
        <path d="M24 3 30 12l10-3-3 10 9 5-9 5 3 10-10-3-6 9-6-9-10 3 3-10-9-5 9-5-3-10 10 3 6-9Z" />
        <circle cx="24" cy="24" r="6" opacity="0.6" />
      </g>
    </svg>
  );
}

/** Hanging Ramadan-style lantern. */
export function LanternIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <g {...base}>
        <path d="M24 2v6M18 8h12l-2 4h-8l-2-4Z" />
        <path d="M16 12h16l3 12-3 12H16l-3-12 3-12Z" />
        <path d="M20 18h8v12h-8zM24 40v4" opacity="0.65" />
      </g>
    </svg>
  );
}

/** Two interlaced rings beneath a crescent. */
export function RingsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <g {...base}>
        <circle cx="19" cy="28" r="11" />
        <circle cx="30" cy="28" r="11" opacity="0.6" />
        <path d="M27 6a7 7 0 1 0 0 10 6 6 0 0 1 0-10Z" />
      </g>
    </svg>
  );
}

/** Location pin with a small dome. */
export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <g {...base}>
        <path d="M24 43c8-10.5 12-17.6 12-23A12 12 0 0 0 12 20c0 5.4 4 12.5 12 23Z" />
        <path d="M19 24v-4a5 5 0 0 1 10 0v4Z" />
      </g>
    </svg>
  );
}

/** Long arabesque vine used as a horizontal ornament. */
export function ArabesqueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 40" aria-hidden {...props}>
      <g {...base}>
        <path d="M2 20c14-16 26 16 38 0s24-16 38 0 26 16 40 0" />
        <path d="M22 20c4-6 8-6 10 0M62 20c4-6 8-6 10 0M98 20c4-6 8-6 10 0" opacity="0.55" />
        <circle cx="60" cy="20" r="3" opacity="0.8" />
      </g>
    </svg>
  );
}

/** Thin gold divider with a centred motif. */
export function Divider({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-5 text-gold">
      <span className="gold-rule w-16 sm:w-28" />
      {children ?? <MedallionIcon className="h-6 w-6" />}
      <span className="gold-rule w-16 sm:w-28" />
    </div>
  );
}
