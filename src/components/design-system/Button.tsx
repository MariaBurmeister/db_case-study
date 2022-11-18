import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import './Button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
  children?: ReactNode,
    onClick: (e?: React.MouseEvent) => void
  } ;

export const Button: FunctionComponent<ButtonProps> = ({variant ='primary', children, onClick, ...rest}) => {
  return <button {...rest} className={variant} onClick={onClick}>{children}</button>;
}