import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={` p-2 rounded-full text-gray-800   ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
