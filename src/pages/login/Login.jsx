

const Login = () => {
  return (
    <form className="container w-50 mt-5">
    <div className="mb-3">
      <label htmlFor="inputName" className="form-label">User Name</label>
      <input type="email" className="form-control" id="inputName" placeholder="Enter User Name..." />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password..." />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div>
    <button type="submit" className="btn btn-primary w-25">Login</button>
  </form>
  )
}

export default Login