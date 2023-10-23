import React from 'react';
import { createStore } from "redux";
import { rootReducer } from './redux/rootReducer';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(rootReducer)


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
