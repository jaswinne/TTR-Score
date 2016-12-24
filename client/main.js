import { Meteor } from 'meteor/meteor';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import {fetchGames, fetchTeams, fetchConferences} from './actions.js'

 
import App from '../imports/ui/App.jsx';
 
Meteor.startup(() => {
	const loggerMiddleware = createLogger();
	 
	let store = createStore(
	  reducer,
	  applyMiddleware(
	      thunkMiddleware, // lets us dispatch() functions
	      loggerMiddleware // neat middleware that logs actions
	    )
	  );
  	render(<Provider store={store}>
    <App/>
  </Provider>, document.getElementById('react-anchor'));
});