// Single Icon Component with all icons
interface IconProps {
  name: string;
  size: number;
  color: string;
  className: string;
}

const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
}: IconProps) => {
  const icons = {
    logo: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          fill={color}
          fillOpacity="0.1"
          stroke={color}
          strokeWidth="2"
        />
        <circle cx="12" cy="8" r="2" fill={color} />
        <circle cx="8" cy="16" r="2" fill={color} />
        <circle cx="16" cy="16" r="2" fill={color} />
        <path
          d="M12 10V13M12 13L8 14M12 13L16 14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    app: (
      <>
        <path
          d="M4 4L12 2L20 4V12C20 17 16 20.5 12 22C8 20.5 4 17 4 12V4Z"
          fill={color}
          fillOpacity="0.1"
          stroke={color}
          strokeWidth="2"
        />
        <circle cx="12" cy="10" r="2" fill={color} />
        <path
          d="M12 12V16M9 14L12 16L15 14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    workflow: (
      <>
        <circle
          cx="6"
          cy="6"
          r="3"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="18"
          cy="6"
          r="3"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="6"
          cy="18"
          r="3"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="18"
          cy="18"
          r="3"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M9 6H15M9 18H15M6 9V15M18 9V15"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    node: (
      <>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <circle cx="12" cy="12" r="3" fill={color} />
        <path
          d="M12 4V8M12 16V20M4 12H8M16 12H20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    trigger: (
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    execute: (
      <path
        d="M8 5V19L19 12L8 5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        fill={color}
      />
    ),
    connection: (
      <>
        <circle
          cx="7"
          cy="12"
          r="3"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="17"
          cy="12"
          r="3"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M10 12H14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 12L12 10M14 12L12 14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    automation: (
      <>
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="12" cy="12" r="3" fill={color} />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {icons[name] || icons.workflow}
    </svg>
  );
};

export default Icon;
