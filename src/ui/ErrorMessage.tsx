interface IProps {
    msg: string
}

function ErrorMessage({ msg }: IProps) {
    return msg ? <span className="block text-red-700 text-sm">{msg}</span> : null;
}

export default ErrorMessage