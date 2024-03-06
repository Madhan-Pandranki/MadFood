import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        contact: "Defaut",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Madhan-Pandranki");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>Contact: {this.state.userInfo.email}</h4>
        <img src={this.state.userInfo.avatar_url} alt="avtar"></img>
      </div>
    );
  }
}

export default UserClass;
