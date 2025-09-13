  import React,{useState} from "react";

  function Like(){
    const [count,setCount] = useState(101);
    return(
      <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}> ❤️</button>
        </div>
    )
  }
  export default Like;
