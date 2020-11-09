import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'
import {Avatar} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
  state = {
    userId: firebase.auth().currentUser.email,
    image: "#",
    name:"",
    docId:"",
  }
selectPicture = async() => {
  const{cancelled,uri} = await ImagePicker.launchImageLibraryAsync({
    mediaTypes:ImagePicker.MediaTypeOptions.all, 
    allowEditing: true,
    aspect:[4,3],
    quality:1
  })
  if(!cancelled){
    this.uploadImage(uri, this.state.userId)
  }
}

  render(){
    return(
      <View style={{flex:1}}>
        <View style = {{flex:1}}>
          <View style = {{flex:0.5, alignItems:"center", backgroundColor: 'orange'}}>
            <Avatar rounded source = {{uri:this.state.image}} size = "medium" onPress = {() => this.selectPicture()}
            containerStyle = {styles.imageContainer}
            showEditButton 
            >

            </Avatar>
            <Text style = {{fontWeight:100, fontSize:20, paddingTop:10}}>
              {this.state.name}
            </Text>
          </View>
        </View>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 30,
    fontWeight:'bold'
  }
})
