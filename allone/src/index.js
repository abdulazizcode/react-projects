import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./sidebar-modal/index.css";
import {AppProvider} from "./sidebar-modal/context";

ReactDOM.render(
	<AppProvider>
		<App />
	</AppProvider>,
  document.getElementById('root')
);

