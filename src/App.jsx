import { useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./Components/Header/NavBar";
import Products from "./Components/ItemsList/Products";
import Login from "./Components/Login/Login";
import AuthService from "./Services/AuthService";

function App() {
  const [isLogin, setIslogin] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [isLogin]);

  const handleLogIn = (userName, password) => {
    AuthService.login(userName, password).then(() => {
      setIslogin(true);
      navigate("/home");
    });
  };

  const HandleDemoLogin = () => {
    AuthService.DemoUser().then(() => {
      setIslogin(true);
      navigate("/home");
    });
  };

  const handleLogOut = () => {
    AuthService.logout();
    setUser(null);
    setIslogin(false);
    navigate("/login");
  };

  return (
    <div className='grid grid-flow-row'>
      <NavBar OnLogout={handleLogOut} loginStatus={isLogin}></NavBar>
      <Routes>
        <Route path='/' element={<Products isLogin={isLogin}></Products>}></Route>
        <Route path='/home' element={<Products isLogin={isLogin}></Products>}></Route>
        <Route path='/login' element={<Login OnlogIn={handleLogIn} OnDemoLogIn={HandleDemoLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
