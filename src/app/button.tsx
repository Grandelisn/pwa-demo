export default function Button({ children, onClick }: { children: string, onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-yellow-400 hover:text-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  )
}