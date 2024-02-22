import { useState } from "react";

export default function Haha(){
   const [num, setNum] = useState<number>(0);
   const handleClick = () =>{
      setNum(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
   }

   let a:String[] = ["你好", "早安中國", "晚安馬鈴薯", "Hi Coco"];

   return(
      <>
         <button onClick={handleClick}>{num && <img src={`./src/components/haha/imgs/a${num}.png`} alt={`a${num}`} />}</button>         
         {num && <p>{a[num]}</p>}
      </>
   );
}