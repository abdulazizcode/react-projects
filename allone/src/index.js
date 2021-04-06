import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./cart/index.css";
import {AppProvider} from "./cart/context";

ReactDOM.render(
	<AppProvider>
		<App />
	</AppProvider>,
  document.getElementById('root')
);

