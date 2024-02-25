import { MouseEventHandler, ReactNode } from "react";

export type TButton = {
  label: string;
  icon?: ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};
