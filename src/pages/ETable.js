import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text ,
  Image,
  ImageBackground,
  TextInput
} from 'react-native';
import {Button,Left,Right,Body} from 'native-base';

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


export default class ETable extends Component<{}> {


  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
    };
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.


  render() {
    return (
      <ImageBackground source={require('../images/coldlowpoly4.png')} style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
     <Text style={styles.table1}>Employee Name</Text>
         <TextInput
        style={{height: 40,width:250,fontSize:20, borderColor: 'black', borderWidth: 2,marginBottom:10}}
        defaultValue=''      />

<Text style={styles.table1}>Id</Text>
         <TextInput
        style={{height: 40,width:250,fontSize:20, borderColor: 'black', borderWidth: 2,marginBottom:10}}
        defaultValue=''      />

<Text style={styles.table1}>DOB</Text>
         <TextInput
        style={{height: 40,width:250,fontSize:20, borderColor: 'black', borderWidth: 2,marginBottom:10}}
        defaultValue=''      />

<Text style={styles.table1}>Phone No.</Text>
         <TextInput
        style={{height: 40,width:250,fontSize:20, borderColor: 'black', borderWidth: 2 ,marginBottom:50}}
        defaultValue=''      />
        <Body>
          <Button rounded  style={{marginTop:20, width:200,backgroundColor: '#0288d1',alignItems:'center'}} onPress={()=>{alert("notification is sent to Email Id !")}}>
          <Body>
            <Text style={{fontSize:22,backgroundColor: '#0288d1',color:'white',fontFamily:'Lato-BoldItalic'}}>Save</Text>
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
    marginBottom:5,
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