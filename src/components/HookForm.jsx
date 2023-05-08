import React, { useState } from "react";

const HookForm = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLasstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();

    const newUser = { firstname, lastname, email, password, confirmPassword };
    console.log("new user details", newUser);

    setFirstname("");
    setLasstname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="mainContainer">
      {/* Form */}
      <div className="form">
        <form onSubmit={createUser}>
          <div className="panel mb-3">
            <label className="form-label">First Name: </label>
            <input
              type="text"
              value={firstname}
              placeholder="First Name"
              className="form-control"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="panel mb-3">
            <label className="form-label">Last Name: </label>
            <input
              type="text"
              value={lastname}
              placeholder="Last Name"
              className="form-control"
              onChange={(e) => setLasstname(e.target.value)}
            />
          </div>
          <div className="panel mb-3">
            <label className="form-label">Email: </label>
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="panel mb-3">
            <label className="form-label">Password: </label>
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="panel mb-3">
            <label className="form-label">Confirm Password: </label>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Submit" className="btn btn-info" />
        </form>
      </div>
      {/* Output */}
      <p>Your Form Data</p>
      <div className="output">
        <p>First Name : {firstname}</p>
        <p>Last Name : {lastname}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
        <p>Confirm Password : {confirmPassword}</p>
        <p className="notes"> * password is shown just for practice proposes</p>
      </div>
    </div>
  );
};

export default HookForm;
