import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./submenu/index.css";
import {AppProvider} from "./submenu/context";

ReactDOM.render(
	<AppProvider>
		<App />
	</AppProvider>,
  document.getElementById('root')
);

