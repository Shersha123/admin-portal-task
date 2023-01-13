import React, {useState} from "react";
import { useEffect } from "react";


function Demo() { //lifecucle Hook
  console.log("Hello");

  //mount
  fetch("https://62ff5a0b34344b6431f76239.mockapi.io/santhiya/api/users").then(()=> {
  console.log("Fetch")
}) 

useEffect(() => {
  console.log("Hello");
  fetch("https://62ff5a0b34344b6431f76239.mockapi.io/santhiya/api/users").then(()=> {
    console.log("Fetch") // MOUNT AAGUMBOTHU THAN INSPECT CONSOLE LA RESULT KATTUM

})
},[])

useEffect(() =>{
  return () => {
    console.log("Destroy")
  }
},[])
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("Timer update")
  }, [timer])
  return (
    <div>
      <button onClick={() => setTimer(timer + 1)}>+</button>
      {timer}
      <button onClick={() => setTimer(timer - 1)}>-</button>
    </div>
  );
}
export default Demo;