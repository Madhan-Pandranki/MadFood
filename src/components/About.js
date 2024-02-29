import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <User name={"Madhan"} location={"Jalandhar"} />
      <UserClass name={"Pandranki"} location={"Jalandhar"} />
    </div>
  );
};

export default About;
