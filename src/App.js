import React from "react";
import './App.css';
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeAppThunkCreator } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";


const App = ({initializeAppThunkCreator, isInitialize}) => {

  const initializeApp = React.useCallback(() => {
    initializeAppThunkCreator();
  }, [initializeAppThunkCreator])

  React.useEffect(() => {
    initializeApp();
  }, [initializeApp]);


  if(!isInitialize){
    return(
      <Preloader/>
    )
  }

  return (

    <div className="App">
      <HeaderContainer />
      <SidebarContainer />
      <div className="content">
        <Routes>
          <Route path="/profile/:id" element={<ProfileContainer />} />
          {/*<Route path="/profile" element={<ProfileContainer />} />*/}
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/users" element={<Users />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>

  );
}

const mapStateToProps = (state) => {
  return{
    isInitialize: state.app.isInitialize
  }
}

export default connect(mapStateToProps, {initializeAppThunkCreator})(App);
