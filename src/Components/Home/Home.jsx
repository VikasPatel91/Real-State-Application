import React from "react";
import "./home.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
// import { AuthContext } from "../Context/AuthContext";

export default function Home() {
  // const { currentUser } = React.useContext(AuthContext);
  // console.log(currentUser);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste error
            delectus quae aliquam, nostrum voluptatem temporibus officia nam ex
            sed officiis debitis assumenda harum dolore maiores quasi iure, a
            asperiores!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="boxes">
              <h1>14+</h1>
              <h2>Years of Experiences</h2>
            </div>
            <div className="boxes">
              <h1>100</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="boxes">
              <h1>1000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img
          src="https://github.com/safak/react-estate-ui/blob/starter/public/bg.png?raw=true"
          alt=""
        />
      </div>
    </div>
  );
}
