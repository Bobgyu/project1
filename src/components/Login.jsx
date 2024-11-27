import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <h2>LOGIN</h2>
        <form>
          <div>
            <label htmlFor="email">Email </label>
            <input type="email" placeholder=" Enter Email" className="border" />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input
              type="password"
              placeholder=" Enter Password"
              className="border"
            />
          </div>
          <button>Submit</button>
        </form>
        <div>
          <span>아직 회원이 아니시라면 | </span>
          <Link to="/register">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
