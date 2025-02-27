export default function Button({ children, onClick, type="button" }: { children: string, onClick?: () => void, type?: 'button' | 'submit' | 'reset' }) {
  return (
    <button onClick={onClick} className="bg-yellow-400 hover:text-blue-700 text-black font-bold py-2 px-4 rounded" type={type}>
      {children}
    </button>
  )
}