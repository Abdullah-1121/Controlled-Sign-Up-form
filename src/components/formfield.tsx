import React from 'react'
import { FieldProps } from "@/zodschema/types";
const formField:React.FC<FieldProps>=({
    type,
    name,
    placeholder,
    error,
    register,
    valueAsNumber

})=>(
    <>
    <input className='border-2  p-3 m-2  w-[80%]  rounded-xl  ' type={type}  placeholder={placeholder} {...register(name, { valueAsNumber })} />
    {error && <span className="error-message text-red-600 text-sm ">{error.message}</span>}
    </>
)
export default formField;
// this component defines field of a  form that can be used anywhere in the code