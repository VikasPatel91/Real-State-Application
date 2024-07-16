import React from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  const [error, setErr] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  //const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErr("");
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const res = await axios.post("http://localhost:3300/api/auth/register", {
        username,
        email,
        password,
      });
      // navigate("/login");
      // console.log(res);
    } catch (err) {
      //  console.log(error);
      setErr(err.response.data.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit} action="">
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span style={{ display: "inline" }}>{error}</span>}

          {/* <Link to={"/login"}>Do you have an account?</Link> */}
        </form>
      </div>
      <div className="imgContainer">
        <img src="" alt="" />
      </div>
    </div>
  );
}
