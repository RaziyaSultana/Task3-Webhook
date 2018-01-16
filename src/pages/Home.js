import React, { Component } from 'react';
import {
  StyleSheet,
  View,Image,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Fab, Tab, 
  Tabs, TabHeading,Text, Card } from "native-base";

  export default class ScarletScreen extends Component<{}>{

  constructor(props){
    super(props);
    this.state={
      id:this.props.id,
      iid:'bak'
    }
    
  }
  
  render(){
    const eid=this.props.id;
  return (
    <ImageBackground source={require('../images/imgScreen1.png')} style={styles.container}>
    
    <Button
        transparent
        onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon name="menu" style={{color: 'blue'}} />
    </Button>
   
    <Body>
    <Title style={{color: 'black',marginTop:-30}}>Home</Title>
   
    <Text style={styles.welcome}> Select Table</Text> 
    
    <Text style={styles.table1} onPress={() => Actions.atable(eid)}>{this.state.id},Author table</Text>

    <Text style={styles.table2} onPress={() => Actions.etable()}>Employee table</Text>
    </Body>     
         
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     },
  welcome: {
    fontFamily: 'Lato-Italic',
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    marginTop:50,
    color: '#000063',
  },
  table1: {
    fontFamily: 'Lato-Italic',
    marginBottom: 10,
    width: 350,
    height:40,
    alignItems: 'center',
    backgroundColor: '#0277bd',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  table2: {
    fontFamily: 'Lato-Italic',
    marginBottom:20,
    width:350,
    height:40,
    alignItems: 'center',
    backgroundColor: '#0277bd',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});

//export default ScarletScreen;