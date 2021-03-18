import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';

import {store} from './store';

import App from './App';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css';
import 'react-responsive-modal/styles.css';
import './css/style.css';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
  	document.getElementById('root')
);