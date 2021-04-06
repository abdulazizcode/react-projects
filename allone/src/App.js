import React from "react";
import CartContainer from "./cart/CartContainer";
import Navbar from "./cart/Navbar";
import { useGlobalContext } from './cart/context'

const App = () => {
	const {loading} = useGlobalContext();
	if (loading) {
		return(
			<div className="loading">
				<h1>Loading</h1>
			</div>
		)
	}

  return(
    <div className="app">
    	<Navbar/>
    	<CartContainer/>
    </div>
  )
}

export default App;