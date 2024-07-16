import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  //   const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:3300/api/auth/logout");
      //   navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="tittle">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              <img src="" alt="" />
            </span>
            <span>
              Username: <b>Vikas</b>
            </span>
            <span>
              E-mail: <b>Vikas@34</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          {/* <List></List> */}
          <div className="title">
            <h1>Saved List</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
