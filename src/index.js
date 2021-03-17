import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import {store} from './store';

import App from './App';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import 'react-responsive-modal/styles.css';
import './css/style.css';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  	document.getElementById('root')
);