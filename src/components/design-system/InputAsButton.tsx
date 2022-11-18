import { FunctionComponent, InputHTMLAttributes, Key } from "react";
import './InputAsButton.scss';

interface InputAsButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  key?: Key;
}
export const InputAsButton: FunctionComponent<InputAsButtonProps> = ({variant = "primary" ,type, children, checked, disabled, onChange, ...rest}) => {
    
    return( 
          <label className={`input-as-button ${variant}${checked ? ' label_checked' : ''}${disabled ? ' disabled' : ''}`} >
            {children}
          <input 
          {...rest}
          type={type}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
         />
          </label>
    );
}