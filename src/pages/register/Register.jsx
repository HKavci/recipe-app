import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    createUser(email, password)
  }

  return (
    <form
      className="container w-50 mt-5 border bg-light p-3 rounded"
      style={{maxWidth: "23rem", minWidth: "18rem", minHeight: "24rem"}}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="inputFirstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          placeholder=""
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputLastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputLastName"
          placeholder=""
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          required
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid gap-2 justify-content-center mt-4">
        <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
      <button type="button" className="btn btn-primary">
        <FcGoogle />
        Sign Up with Google
      </button>
      </div>
    </form>
  );
};

export default Register;
