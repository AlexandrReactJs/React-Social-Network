import React from "react";
import Sidebar from "./Sidebar";

interface Props {
    userId: number | null;
}

const SidebarContainer: React.FC<Props> = ({userId}) => {
    return(
        <Sidebar userId = {userId}/>
    );
}

export default SidebarContainer;