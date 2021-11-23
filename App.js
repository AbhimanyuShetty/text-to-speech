import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import Alert from 'react-alert';


export default class App extends React.Component {
  constructor(){
    super()
    this.state={
wordToSay:""
    }
  }
  speak=()=>{
var word=this.state.wordToSay

word===""?alert('Input your text in the box and then click the button to hear it'):Speech.speak(word)
  }

  render() {
    return (
      <View style = {styles.container}>
        <Header
            backgroundColor={'orange'}
            centerComponent={{
              text: ' Text To Sound',
              style: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
            }}
          />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://cdn3.iconfinder.com/data/icons/contact-us-set-2/256/52-512.png',
          }}
        />
        
          
         <TextInput style={styles.inputBox}
       onChangeText=
       {(text)=>{this.setState({wordToSay:text})}}
     value={this.state.wordToSay}/>


        <TouchableOpacity style = {styles.speechButton}
        onPress = {() => {
          this.speak()
        }}>
          <Text style = {styles.displayText}>Click to Hear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan'
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    fontSize: 23,
    borderColor: '#566B73',
    color: '#2C5361',
    borderRadius: 5
  },
  displayText: {
    textAlign: 'center',
    fontSize: 27,
    color: 'white'
  },
  speechButton:{
    width: '60%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 60,
    backgroundColor: 'orange'
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 15,
  }
});
