import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { AuthContext } from "../Context/AuthContext";
export default function Login() {
  const [error, setErr] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  //const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErr("");
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const res = await axios.post("http://localhost:3300/api/auth/login", {
        username,
        password,
      });
      updateUser(res.data);
      // navigate("/login");
      // console.log(res);
      // localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      //  console.log(error);
      setErr(err.response.data.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit} action="">
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            required
            minLength={3}
            maxLength={20}
            type="password"
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span style={{ display: "inline" }}>{error}</span>}

          {/* <Link to={"/register"}>Don't you have an account?</Link> */}
        </form>
      </div>
      <div className="imgContainer">
        <img src="" alt="" />
      </div>
    </div>
  );
}
