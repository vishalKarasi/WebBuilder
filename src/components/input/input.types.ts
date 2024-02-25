import { InputHTMLAttributes } from "react";

export type TInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: React.ReactNode;
  errorMessage?: string;
  pattern?: string;
};