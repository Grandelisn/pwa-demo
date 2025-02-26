export default function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input className="border-2 border-gray-300 rounded-md p-2 text-black placeholder-black font-bold" type="text" {...props} />
    )
}