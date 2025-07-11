import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    color: string
}
const CircleColor = ({ color, ...rest }: IProps) => {
    return (
        <span className="block w-3 h-3 rounded-full cursor-pointer"
            style={{ backgroundColor: color }}
            {...rest}
        />

    )

}
export default CircleColor;