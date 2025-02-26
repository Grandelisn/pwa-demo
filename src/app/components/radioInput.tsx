export default function RadioInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div>
            <input {...props}/>
            <label>{props.value}</label>  
        </div>
          
    )
}