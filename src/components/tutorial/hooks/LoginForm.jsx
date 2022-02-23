import React, { useRef } from "react";
import useFetch from "react-fetch-hook";
import { useForm } from "react-hook-form";
export const LoginForm = () => {
    //const { isLoading, items, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    //console.log(isLoading, items, error);
    return (
        <>
            <h3>Hooks Form</h3>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register("example")} defaultValue="test" /><br />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}<br />
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                {errors.firstName && <span>This field is required</span>}
                {errors.firstName?.type === 'maxLength' && <span>This field is not be less then 20</span>}<br />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                {errors.lastName?.type === 'pattern' && <span>This field is required</span>}<br />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                {errors.age?.type === 'min' && <span>This field is 18</span>}
                {errors.age?.type === 'max' && <span>This field is 99</span>}<br />
                <input type="submit" />
            </form>
        </>
    );
};
