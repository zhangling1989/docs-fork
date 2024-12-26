import { PropsWithChildren } from "react";
import clsx from "clsx";

interface ButtonProps {
  variant: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant,
  onClick,
  className,
}) => {
  return (
    <button
      className={clsx(
        "font-bold py-5 px-8 inline-flex items-center justify-center transition-all rounded-full text-xl backdrop-blur-[32px]",
        {
          "text-magic-white bg-magic-purple hover:opacity-90 shadow-[0px_3px_84px_-10px_rgba(63,107,175,0.5)]":
            variant === "primary",
          "text-magic-purple bg-magic-semi-deep-purple/15 shadow-[0px_3px_84px_-10px_rgba(63,107,175,0.5)]":
            variant === "secondary",
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
