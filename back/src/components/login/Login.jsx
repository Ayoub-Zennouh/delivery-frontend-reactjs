import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='d-flex flex-row vh-100 vw-100'>
      <div className='vh-100 w-25 bg-primary'></div>
      <div className='vh-100 w-75 d-flex flex-column justify-content-center right-grid'>
        <form className='w-50 mx-auto d-flex flex-column align-items-center'>
          <h1 className='mb-5'>Sign in</h1>
          <div className="mb-3 w-50">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-mail'></input>
          </div>
          <div className="mb-3 w-50">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'></input>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
              <label className="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" className="btn btn-success w-50">Submit</button>
          <Link type="submit" className="btn btn-primary mt-3 w-50" to="/signup">Sign up</Link>
        </form>
      </div>
    </div>
);
}

export default Login;