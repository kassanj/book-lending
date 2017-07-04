import React from 'react';
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App'

injectTapEventPlugin();

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, 
	document.getElementById('root'));

