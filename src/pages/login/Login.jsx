import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, signUpProvider, forgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
    navigate("/");
  };

  return (
    <form
      className="container w-50 mt-5 border bg-light p-3 rounded"
      style={{ maxWidth: "23rem", minWidth: "18rem", minHeight: "24rem" }}
      onSubmit={handleSubmit}
    >
      <div className="mb-3 mt-3">
        <label htmlFor="inputEmail" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <p
          className="border w-50 text-center"
          role="button"
          onClick={() => forgotPassword(email)}
        >
          Forgot Password
        </p>
      </div>
      <div className="d-grid gap-2 justify-content-center mt-4">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={signUpProvider}
        >
          <FcGoogle />
          <span>Sign in with Google</span>
        </button>
      </div>
      <div className="d-flex justify-content-center mt-1">
        <Link to="/register">Do you have not an account?</Link>
      </div>
    </form>
  );
};

export default Login;
