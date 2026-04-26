import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function WalletCardsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4.5 7.5h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
      <path d="M6 7.5V6a2 2 0 0 1 2-2h10.5" />
      <path d="M15.5 13h4" />
      <path d="M6.5 11h5" />
      <path d="M6.5 15h3" />
    </BaseIcon>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.8v2.4" />
      <path d="M21.2 12h-2.4" />
      <path d="M12 18.8v2.4" />
      <path d="M5.2 12H2.8" />
    </BaseIcon>
  );
}

export function ChartLineIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m6.5 15 3.2-4 3.1 2.5L18 7" />
      <path d="M18 7h-3" />
      <path d="M18 7v3" />
    </BaseIcon>
  );
}

export function BotIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4v2.5" />
      <path d="M8 4h8" />
      <rect x="5" y="7" width="14" height="11" rx="3" />
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M9.5 15h5" />
      <path d="M3 11.5v2" />
      <path d="M21 11.5v2" />
    </BaseIcon>
  );
}

export function LinkFlowIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9.5 7.5 8 6a4 4 0 0 0-5.6 5.7l2.1 2.1a4 4 0 0 0 5.7 0" />
      <path d="m14.5 16.5 1.5 1.5a4 4 0 0 0 5.6-5.7l-2.1-2.1a4 4 0 0 0-5.7 0" />
      <path d="m8.5 15.5 7-7" />
    </BaseIcon>
  );
}

export function PlugIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 7V3" />
      <path d="M15 7V3" />
      <path d="M7 7h10v4a5 5 0 0 1-10 0V7Z" />
      <path d="M12 16v5" />
      <path d="M8.5 21h7" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3.5 19 6v5.4c0 4.4-2.8 7.3-7 9.1-4.2-1.8-7-4.7-7-9.1V6l7-2.5Z" />
      <path d="m9.2 12 1.8 1.8 3.8-4" />
    </BaseIcon>
  );
}

export function LockKeyIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="5" y="10" width="14" height="10" rx="2.5" />
      <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" />
      <path d="M12 14v2" />
    </BaseIcon>
  );
}

export function ArchiveIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M5.5 7v12h13V7" />
      <path d="M6 4h12l2 3H4l2-3Z" />
      <path d="M9.5 11h5" />
    </BaseIcon>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </BaseIcon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </BaseIcon>
  );
}

