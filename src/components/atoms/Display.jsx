const Display = ({children, className}) => {
    return (
        <div className={`${className} ${baseStyle}`}>{children}</div>
    )
}

export default Display;

const baseStyle = "bg-sky-500/75 backdrop-md w-24 flex items-center justify-center text-sky-50"