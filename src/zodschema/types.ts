import { UseFormRegister , FieldError } from "react-hook-form";


// Fields represent the structure of our form 
export type Fields = { // These are the types of the fields that will be used in the form
    username:string,
    email:string,
    age:number,
    password:string,
    confirmPassword:string


}
// FeildProps are the properties of each form element
export type FieldProps={// These are the properties of each form field
    type:string,
    name:validFieldNames,
    placeholder:string,
    error?:FieldError
    register:UseFormRegister<Fields>
    valueAsNumber?:boolean

}
 export type validFieldNames= // Union type , means that the name field can have any of these names
    |"username"
    |"email"
    |"age"
    |"password"
    |"confirmPassword";
    
    // Creating a schema for the form data 
    