import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text ,
  TextInput,
  ImageBackground
} from 'react-native';
import {Button,Left,Right,Body} from 'native-base';
import { Actions } from 'react-native-router-flux'; // New code

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        style={{width:400,fontSize:20, borderColor: 'black', borderWidth: 2}}
        editable = {true}
        maxLength = {100}
        
      />
    );
  }
}


export default class ATable extends Component<{}> {


  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
ontpress(){
    
  fetch('https://hooks.zapier.com/hooks/catch/2866666/8a9jae/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    key: 'this.props.email',
  
  }),
});

  alert(this.props.email);
}
press() {
  Actions.atable()
}
  render() {
    alert(this.props.eid);
    return (
      <ImageBackground source={require('../images/coldlowpoly4.png')} style={styles.container} style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
     <Text style={styles.table1}>Author Name</Text>
         <TextInput
        style={{height: 40,width:200,fontSize:20, borderColor: 'black', borderWidth: 2,marginBottom:10}}/>

<Text style={styles.table1}>Title</Text>
         <TextInput
        style={{height: 40,width:250,fontSize:20, borderColor: 'black', borderWidth: 2,marginBottom:10}}
        defaultValue=''      />

        <Text style={styles.table1}>Content</Text>
        <UselessTextInput
        marginBottom={50}
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
        <Body>
          <Button rounded  style={{marginTop:20, width:200,backgroundColor: '#0288d1',alignItems:'center'}}  onPress={this.ontpress.bind(this)}>
          <Body>
            <Text style={{fontSize:22,backgroundColor: '#0288d1',color:'white'}}>Save</Text>
          </Body>
       </Button>
     </Body>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    width:null,
    height:null,
  },
  table1: {
    fontFamily:'Lato-BoldItalic',
    marginBottom:10,
    alignItems:'center',
    fontSize: 25,
    margin: 10,
    color: 'black',
  },
  table2: {
    marginBottom:0,
    width:400,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
});