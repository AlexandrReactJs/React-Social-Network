import React from "react";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

const SidebarContainer = (props) => {
    return(
        <Sidebar userId = {props.userId}/>
    );
}

let mapStateToProps = (state) => {
    return{
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(SidebarContainer)