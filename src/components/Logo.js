import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
   Image 
} from 'react-native';

export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:150, height: 150}}
          			source={require('../images/zap.jpg')}/>
          		<Text style={styles.logoText}>Welcome</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:18,
		color:'rgba(255, 255, 255, 0.7)',
		fontWeight:'bold'
  }
});
