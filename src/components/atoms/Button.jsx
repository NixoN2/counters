const Button = ({onClick, children, className}) => {
    return (
        <button onClick={onClick} className={`${className} ${baseStyle}`}>{children}</button>
    )
}

export default Button;

const baseStyle = "bg-emerald-600 text-sky-50 w-8 text-xl font-bold pb-1"