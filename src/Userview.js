import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Userview() {
  const params = useParams();
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(...searchParams);

  const [userData, setUserData] = useState({});
  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://6300f2429a1035c7f8fb32ef.mockapi.io/users/user${params.id}`
      );
      setUserData(user.data)
     
    } catch (error) {}
  };
  return (
    <>
 <h2 style={{color:'red'}}>{userData.name}</h2>
 <h2>{userData.position}</h2>
 <h2>{userData.office}</h2>
 <h2>{userData.age}</h2>
 <h2>{userData.startdate}</h2>
 <h2>{userData.salary}</h2>
    </>
  );
}
export default Userview;