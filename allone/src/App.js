import React from "react";

//import Header from "./sidebar-modal/Home";
//import Modal from "./sidebar-modal/Modal";
//import SideBar from "./sidebar-modal/SideBar";

import Navbar from './submenu/Navbar'
import Hero from './submenu/Hero'
import Sidebar from './submenu/Sidebar'
import Submenu from './submenu/Submenu'

const App = () => {
  return(
    <div className="app">
    	<Navbar/>
    	<Sidebar/>
    	<Hero/>
    	<Submenu/>
    </div>
  )
}

export default App;