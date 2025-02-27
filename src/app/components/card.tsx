import { useForm } from "react-hook-form";
import TextInput from "./textInput";
import RadioInput from "./radioInput";
import Button from "./button";
import { useContext } from "react";
import { AppContext } from "../appContext";

export type BurgerFormData = {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    burger: string;
    uploaded: boolean;
};

export default function Card(){

    const { formData, setFormData, online } = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm<BurgerFormData>();
    const onSubmit = (data:BurgerFormData) => {
        if(!online){
            alert("You are offline, saving to local storage");
            setFormData(data);
            sessionStorage.setItem("formData", JSON.stringify({...data, uploaded: false}));
            return;
        }
        //save to server
        setFormData({...data, uploaded: true});
        console.log("submit to server");
        console.log(formData);
    }
    console.log(errors);
   
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput type="text" placeholder="First name" {...register("firstName", {required: true, maxLength: 80})} />
            <TextInput type="text" placeholder="Last name" {...register("lastName", {required: true, maxLength: 100})} />
            <TextInput type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
            <TextInput type="tel" placeholder="Mobile number" {...register("mobileNumber", {required: true, minLength: 6, maxLength: 12})} />
            <label className="font-bold text-xl">Burger?</label>
            <div className="flex gap-4">
                <RadioInput {...register("burger", { required: true })} type="radio" value="Yes" />
                <RadioInput {...register("burger", { required: true })} type="radio" value="No" />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}