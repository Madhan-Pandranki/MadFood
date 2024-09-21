import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       {/* <User name={"Madhan"} location={"Jalandhar"} /> */}
//       <UserClass name={"Pandranki"} location={"Jalandhar"} />
//     </div>
//   );
// };

// class About extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>About Us</h1>
//         <div>
//           loggedIn User:
//           <UserContext.Consumer>
//             {({ loggedInUser }) => (
//               <h1 className="font-bold">{loggedInUser}</h1>
//             )}
//           </UserContext.Consumer>
//         </div>
//         {/* <User name={"Madhan"} location={"Jalandhar"} /> */}
//         <UserClass name={"Pandranki"} location={"Jalandhar"} />
//       </div>
//     );
//   }
// }

// export default About;

import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 p-6 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="font-bold text-4xl text-center mb-6 text-green-600">
            About Us
          </h1>
          <div className="text-center mb-4">
            <p className="text-gray-700 text-lg">
              Logged-in User:
            </p>
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <h2 className="font-semibold text-xl text-blue-500">
                  {loggedInUser}
                </h2>
              )}
            </UserContext.Consumer>
          </div>
          <p className="mt-6 text-lg text-gray-600 text-center">
            We are a dynamic team based in Jalandhar, committed to delivering
            exceptional service and innovation in everything we do.
          </p>
          <p className="mt-4 text-gray-600 text-center">
            Our goal is to create value and exceed our customers' expectations
            every step of the way.
          </p>
        </div>
      </div>
    );
  }
}

export default About;

