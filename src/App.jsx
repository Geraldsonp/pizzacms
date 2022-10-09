import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Header/NavBar";
import Products from "./Components/ItemsList/Products";
import Login from "./Components/Login/Login";
import AuthService from "./Services/AuthService";

function App() {
  const [isLogin, setIslogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    if (user !== null) {
      setIslogin(true);
    } else {
      setIslogin(false);
    }
  });

  const handleLogOut = () => {
    AuthService.logout();
    setUser(null);
    setIslogin(false);
  };

  return (
    <div className='grid grid-flow-row'>
      <NavBar OnLogout={handleLogOut} UserName={user?.name} loginStatus={isLogin}></NavBar>
      <Routes>
        <Route path='/' element={isLogin ? <Products></Products> : <Login></Login>}></Route>
        <Route path='/home' element={isLogin ? <Products></Products> : <Login></Login>}></Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
