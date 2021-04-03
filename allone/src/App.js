import React from "react";
import Header from "./sidebar-modal/Home";
import Modal from "./sidebar-modal/Modal";
import SideBar from "./sidebar-modal/SideBar";

const App = () => {
  return(
    <div className="app">
    	<Header/>
    	<Modal/>
    	<SideBar/>
    </div>
  )
}

export default App;