interface GearIconProps {
  className?: string;
  size?: number;
}

export const GearIcon = ({ className = "", size = 100 }: GearIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 20L55 30H45L50 20Z M80 50L70 45V55L80 50Z M50 80L45 70H55L50 80Z M20 50L30 55V45L20 50Z"
        fill="currentColor"
        opacity="0.3"
      />
      <circle
        cx="50"
        cy="50"
        r="25"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="10"
        fill="currentColor"
      />
      <rect x="48" y="15" width="4" height="15" fill="currentColor" />
      <rect x="48" y="70" width="4" height="15" fill="currentColor" />
      <rect x="15" y="48" width="15" height="4" fill="currentColor" />
      <rect x="70" y="48" width="15" height="4" fill="currentColor" />
      <rect x="30" y="26" width="4" height="12" transform="rotate(45 32 32)" fill="currentColor" />
      <rect x="66" y="62" width="4" height="12" transform="rotate(45 68 68)" fill="currentColor" />
      <rect x="26" y="66" width="4" height="12" transform="rotate(-45 32 68)" fill="currentColor" />
      <rect x="62" y="30" width="4" height="12" transform="rotate(-45 68 32)" fill="currentColor" />
    </svg>
  );
};
