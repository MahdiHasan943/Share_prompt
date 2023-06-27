import Prompt from "@models/pormpt"
import { connectToDB } from "@utils/database"
export const POST = async (req)=>{
    
    const { userId, prompt, tag } = await req.json()
    try {
        await connectToDB()
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
          
         
        })
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {
            status:201
        })

     }
    catch (error) {
        console.log(error)
        return new Response ('Failed to creqate new prompt',{status:500})
    }

}