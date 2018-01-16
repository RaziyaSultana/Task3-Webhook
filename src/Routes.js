import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import ETable from './pages/ETable';
import ATable from './pages/ATable';

export default class Routes extends Component<{}> {
	render() {
		return( 
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
				  <Scene key="home" component={Home} title="Home"/>
				  <Scene key="etable" component={ETable} title="Employee Table"  hideNavBar={false}/>
				  <Scene key="atable" component={ATable} title="Author Table" hideNavBar={false}/>

				  </Stack>
			 </Router>
			)
    }
}