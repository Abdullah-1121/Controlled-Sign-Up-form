'use client'
import { useForm } from "react-hook-form"
import { Fields ,validFieldNames} from "@/zodschema/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Formschema } from "@/zodschema/schema"
import FormField from "./formfield"
function SignupForm(){
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset
    } = useForm<Fields>({
        resolver:zodResolver(Formschema)
    });
    const onsubmit =async (data:Fields)=>{
      // const invalidData = {
      //   username: "", // Empty string (assuming a non-empty username is required)
      //   email: "invalid-email", // Not a valid email format
      //   age: "seventeen", // Not a number
      //   password: "short", // Too short
      //   confirmPassword: "different", // Does not match the password
      // };
      try{
        let response = await fetch ('/api/form',{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data)

      });
      const responseData = await response.json();
      const {errors={}} = responseData;
      console.log(errors)
     
      const fieldmappings:Record<string,validFieldNames>={
        username:'username',
        email:'email',
        age:'age',
        password:'password',
        confirmPassword:'confirmPassword'
      }
      const fieldwithError = Object.keys(fieldmappings).find(
        (field)=>errors[field]
      )
      if(fieldwithError){
        setError(fieldmappings[fieldwithError], {
          type: "server",
          message: errors[fieldwithError],
        });
      }
      reset()
      alert('Data submitted successfully')


    }catch(error){
      alert ('Submitting Form Failed , Try Again')

      }
      
        

    }
    return (
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="flex flex-col justify-center items-center w-1/3 mx-auto mt-16 p-4 border-2 bg-white m-4 rounded-xl ">
            <h1 className="text-3xl font-bold mb-4 text-blue-600">
              Sign Up
            </h1>
            <FormField
              type="username"
              placeholder="Username"
              name="username"
              register={register}
              error={errors.username}
            />
  
            <FormField
              type="email"
              placeholder="Email"
              name="email"
              register={register}
              error={errors.email}
            />
  
            <FormField
              type="number"
              placeholder="Age"
              name="age"
              register={register}
              error={errors.age}
              valueAsNumber
            />
  
            <FormField
              type="password"
              placeholder="Password"
              name="password"
              register={register}
              error={errors.password}
            />
  
            <FormField
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword}
            />
            <button type="submit" className=" p-4 m-4 bg-blue-600 text-white rounded-xl font-bold  shadow-xl hover:bg-blue-400  ">
              Submit
            </button>
          </div>
        </form>
    );
}
export default SignupForm;