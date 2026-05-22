import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 24, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...rest,
  };
}

export function FlaskIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function PawIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="10" r="1.6" />
      <circle cx="10" cy="6" r="1.6" />
      <circle cx="14" cy="6" r="1.6" />
      <circle cx="18" cy="10" r="1.6" />
      <path d="M7 17c0-3 2.5-5 5-5s5 2 5 5-2.5 4-5 4-5-1-5-4z" />
    </svg>
  );
}

export function StoreIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 9l1.5-4h15L21 9" />
      <path d="M4 9h16v11H4z" />
      <path d="M8 9a2 2 0 1 1-4 0" />
      <path d="M12 9a2 2 0 1 1-4 0" />
      <path d="M16 9a2 2 0 1 1-4 0" />
      <path d="M20 9a2 2 0 1 1-4 0" />
    </svg>
  );
}

export function BoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 8a2.5 2.5 0 1 1 3.5-3.5A2.5 2.5 0 0 1 12 5l7 7a2.5 2.5 0 1 1-3.5 3.5A2.5 2.5 0 0 1 12 19l-7-7a2.5 2.5 0 0 1 0-4z" />
    </svg>
  );
}

export function StomachIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 4v3a3 3 0 0 0 3 3h3a4 4 0 0 1 4 4v2a5 5 0 0 1-5 5h-2a6 6 0 0 1-6-6V9a5 5 0 0 1 3-5z" />
      <path d="M11 13c1.5 0 2-1 4-1" />
    </svg>
  );
}

export function PetIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 11c0-3 2-5 4-5s2 1 3 1 1-1 3-1 4 2 4 5-2 6-5 7c-1 .3-2 .3-4 0-3-1-5-4-5-7z" />
      <path d="M5 8c0-1 .5-2 1.5-2" />
      <path d="M19 8c0-1-.5-2-1.5-2" />
      <circle cx="10" cy="12" r=".6" fill="currentColor" />
      <circle cx="14" cy="12" r=".6" fill="currentColor" />
    </svg>
  );
}

export function ToothIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 3c2 0 2 1 5 1s3-1 5-1 3 2 3 5c0 4-2 6-2.5 9.5S16 21 15 21s-1-3-1.5-5.5S12 13 12 13s-1 0-1.5 2.5S10 21 9 21s-2-.5-2.5-3.5S4 12 4 8s1-5 3-5z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7L12 17.3 5.7 21l1.7-7L2 9.2l7.1-.6L12 2z" />
    </svg>
  );
}

export function DocIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
      <path d="M10 12h6" />
      <path d="M10 16h6" />
    </svg>
  );
}

export function getValueIcon(key: string) {
  switch (key) {
    case 'flask':
      return FlaskIcon;
    case 'shield':
      return ShieldIcon;
    case 'paw':
      return PawIcon;
    case 'store':
      return StoreIcon;
    case 'bone':
      return BoneIcon;
    case 'stomach':
      return StomachIcon;
    case 'pet':
      return PetIcon;
    case 'tooth':
      return ToothIcon;
    default:
      return PawIcon;
  }
}
