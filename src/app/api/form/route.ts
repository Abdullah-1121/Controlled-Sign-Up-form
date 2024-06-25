import { Formschema } from "@/zodschema/schema";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request:NextRequest){
    
    const data = await request.json(); // retrieves the data
    const result = Formschema.safeParse(data);//validates the data against zod validation
    if(result.success){
        return NextResponse.json({success:true});//if no validation errors return the success message
        
    }
    const serverErrors = Object.fromEntries(// if there are any errors convert them into object 
        result.error?.issues?.map((issue) => [issue.path[0], issue.message]) || []
    )
    return NextResponse.json({error:serverErrors})//and send them to the user

}