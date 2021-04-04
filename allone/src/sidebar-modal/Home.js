import React from 'react';
import { FaBars } from 'react-icons/fa';
import {AppContext,useGlobalContext} from "./context";
const Home = () => {
	const {openSidebar, openModal} = useGlobalContext();
	return(
		<main>
			<button className="sidebar-toggle" onClick={openSidebar}>
				<FaBars/>
			</button>
			<button onClick={openModal} className="btn">
				Show Modal
			</button>
		</main>
	)
}


export default Home;