import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> { }

function Input({ ...rest }: IProps) {
    return (
        <input type='text' className='border-[1px] border-gray-400 shadow-md px-2 py-1 rounded-md mb-1
          focus:border-b-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500' {...rest}
        />
    )
}
export default Input