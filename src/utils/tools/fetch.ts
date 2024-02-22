import {apis} from "./api";

export async function HelloWorld():Promise<string>{
   try{
      const response = await fetch(apis.HelloWorld, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json'
         },
      })
      const data = await response.json();
      return data
   }catch(e){
      console.error("fetch HelloWorld error", e)
      return "";
   }
}