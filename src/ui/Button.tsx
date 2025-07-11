import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";
    onClick?: () => void;
}
function Button({ children, className, width = 'w-full', onClick }: IProps) {
    return (
        <button className={`${className} ${width} rounded-md`} onClick={onClick}>
            {children}
        </button>
    )
}
export default Button