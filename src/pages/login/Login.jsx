import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem("user", "kavci")
    navigate("/")
  }


  return (
    <form className="container w-50 mt-5 border bg-light p-3 rounded" onSubmit={handleSubmit} >
    <div className="mb-3">
      <label htmlFor="inputName" className="form-label">User Name</label>
      <input type="text" className="form-control" id="inputName" placeholder="Enter Name..." required />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password..." required />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div>
    <button type="submit" className="btn btn-primary w-25" >Login</button>
  </form>
  )
}

export default Login