import "./layout.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Register from "./Components/Register/Register.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
// import Profile from "./Components/Profile/Profile.jsx";
import ListPage from "./Components/ListPage/ListPage.js";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: "<Home/>",
  //   },
  //   {
  //     path: "/list",
  //     element: "<ListPage/>",
  //   },
  // ]);
  return (
    <>
      <div className="layout">
        {/* <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Home />
      </div> */}
        hello world
      </div>
      {/* <RouterProvider router={router}/> */}
    </>
  );
}

export default App;
