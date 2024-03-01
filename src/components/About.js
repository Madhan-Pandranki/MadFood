import User from "./User";
import React from "react";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       {/* <User name={"Madhan"} location={"Jalandhar"} /> */}
//       <UserClass name={"Pandranki"} location={"Jalandhar"} />
//     </div>
//   );
// };

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Us</h1>
        {/* <User name={"Madhan"} location={"Jalandhar"} /> */}
        <UserClass name={"Pandranki"} location={"Jalandhar"} />
      </div>
    );
  }
}

export default About;
