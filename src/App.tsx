import React from "react";
import './App.css';
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./RTK/store";
import { fetchUserAuthData } from "./RTK/slices/auth-slice";
import type { AppDispatch } from "./RTK/store";


const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)


  React.useEffect(() => {
    dispatch(fetchUserAuthData())
  }, []);




  return (
    <>
      {
        isAuth === true ?
          <div className="App">
            <HeaderContainer />

            <div className="app-container">
              <SidebarContainer />
              <div className="content">
                <Routes>
                  <Route path="/profile/:id" element={<ProfileContainer />} />
                  {/*<Route path="/profile" element={<ProfileContainer />} />*/}
                  <Route path="/dialogs" element={<DialogsContainer />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/news" element={<News />} />
                </Routes>
              </div>
            </div>
          </div> : <Login />
      }
    </>


  );
}


export default App;
