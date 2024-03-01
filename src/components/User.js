import { useEffect, useState } from "react";

const User = (props) => {
  const [cnt] = useState(0);
  const [cnt2] = useState(1);

  useEffect(() => {
    // console.log("UseEffect");
    // const timer = setInterval(() => {
    //   console.log("op");
    // }, 1000);
    // return () => {
    //   clearInterval(timer);
    // };
  });

  // console.log("render");

  return (
    <div className="user-card">
      <h1>Count: {cnt}</h1>
      <h1>Count2: {cnt2}</h1>

      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h4>Contact</h4>
    </div>
  );
};

export default User;
