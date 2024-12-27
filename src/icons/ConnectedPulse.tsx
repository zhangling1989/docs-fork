import clsx from "clsx";

export const ConnectedPulse: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <span className={clsx("relative flex h-3 w-3", className)}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
  );
};
