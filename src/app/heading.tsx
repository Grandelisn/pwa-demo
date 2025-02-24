import { ReactNode } from "react"
type HeadingProps = {
    children:ReactNode
}
export default function Heading({children}:HeadingProps){
    return (
        <div>
            <p>test</p>
            {children}
        </div>
    )
}