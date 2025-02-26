import { useForm } from "react-hook-form";
import TextInput from "./textInput";
import RadioInput from "./radioInput";
import Button from "./button";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    developer: string;
};

export default function Card(){

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = (data:FormData) => console.log(data);
    console.log(errors);
  
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput type="text" placeholder="First name" {...register("firstName", {required: true, maxLength: 80})} />
            <TextInput type="text" placeholder="Last name" {...register("lastName", {required: true, maxLength: 100})} />
            <TextInput type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
            <TextInput type="tel" placeholder="Mobile number" {...register("mobileNumber", {required: true, minLength: 6, maxLength: 12})} />
            <label className="font-bold text-xl">Developer?</label>
            <div className="flex gap-4">
                <RadioInput {...register("developer", { required: true })} type="radio" value="Yes" />
                <RadioInput {...register("developer", { required: true })} type="radio" value="No" />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}