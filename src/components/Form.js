import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,  
  TouchableOpacity 
} from 'react-native'; 
import Home from '../pages/Home';
import { Actions } from 'react-native-router-flux';
export default class Form extends Component<{}> {

constructor(props){
  super(props);
  this.state={
    email:'',
    password:'',
  } 
}

onButtonPress(tab){
  if(tab=='Login')
  {   alert(tab);
     Actions.login(email);
    }
  else if(tab=='Signup'){
    Actions.atable();
  }

}

	render(){
    const tab=this.props.type;
   // const id=this.state.email;
		return(
      
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({email})}
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button}  /*onPress={this.onButtonPress(tab)}*/ onPress={() =>{if(tab=='Login'){ var id=this.state.email; 
            
            fetch('https://hooks.zapier.com/hooks/catch/2866666/8wlb7i/', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                keyy: this.state.email
              
              }),
            });
                                                        alert(id); Actions.home(id)} else if(tab=='Signup'){Actions.login()}} }>
             <Text style={styles.buttonText} >{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'#63ccff',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#006db3',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});
