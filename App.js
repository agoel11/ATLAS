import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
 
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#1155CC', 'transparent']} style={styles.background}/>
        <Text style={styles.titleText}>ATLAS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Single')}>
          <LinearGradient colors={['#00FFFE', '#31f48e']} style={styles.singleButton}>
            <Text style={styles.buttonText}>  Single Player  </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Join')}>
          <LinearGradient colors={['#00FFFE', '#31f48e']} style={styles.multiButton}>
            <Text style={styles.buttonText}>  Multi-Player  </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <LinearGradient colors={['#00FFFE', '#31f48e']} style={styles.creditButton}>
            <Text style={styles.buttonText}>  About  </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Image style={styles.tinyLogo} resizeMode="cover" source={require('./assets/earth-icon.png')}/>
    </View>
 
  );
}

var prev = "Belgium"
function check(text, setScore, score) {
  if (text.toLowerCase().charAt(0) == prev.toLowerCase().charAt(prev.length-1)){
    prev = text
    setScore(score + 1)
    return text
  }
  else {
    return prev
  }
}

function SingleScreen({ navigation }) {
  const [text, setText] = useState('');
  const [startplace, setStartplace] = useState(prev);
  const [score, setScore] = useState(0)
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#1155CC', 'transparent']} style={styles.background}/>
      <Text style={styles.titleText}>ATLAS</Text>
      <Text style={styles.underText}>Single Player</Text>
      <Text style={styles.normText}>Last Answer:</Text>
      <Text style={styles.normundText}>{startplace}</Text>
      <Text style={styles.normunaText}>Word Must Start With: A</Text>
      <TextInput style={styles.sansinput} placeholder="Your Answer" onChangeText={(text) => setText(text)} value={text}/>
      <View style={styles.container4}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <LinearGradient colors={['#00FFFE', '#31f48e']} style={styles.enterButton}>
            <Text style={styles.buttonText}>  Quit  </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.normunaText}>   </Text>
        <TouchableOpacity onPress={() => {setStartplace(check(text, setScore, score))}}>
          <LinearGradient colors={['#00FFFE', '#31f48e']} style={styles.enterButton}>
            <Text style={styles.buttonText}>  Enter  </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View> 
      <Text style={styles.normunsText}>Incorrect/ Correct</Text>
      <Text style={styles.normunsText}>Score: {score} </Text>
      <View style={styles.container2}></View>
    </View>
  );
}
 
function JoinScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#1155CC', 'transparent']} style={styles.background}/>
      <Text style={styles.titleText}>ATLAS</Text>
      <Text style={styles.joinText}>Join A Game</Text>
      <TouchableOpacity>
        <LinearGradient colors={['#00FFFE', '#31f48e']} style={styles.mhomeButton}>
          <Text style={styles.buttonText}>  Create A Game  </Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.enterText}>Enter A Code:</Text>
      <TextInput style={styles.codeinput} placeholder="Game Code" keyboardType= 'numeric'/>
      <View style={styles.container5}>
        <TouchableOpacity>
          <LinearGradient colors={['#00FFFE', '#31f48e']} style={styles.mhomeButton}>
            <Text style={styles.buttonText}>  Join Game  </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.container6}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <LinearGradient colors={['#00FFFE', '#31f48e']} style={styles.mhomeButton}>
            <Text style={styles.buttonText}>  Home  </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#1155CC', 'transparent']} style={styles.background}/>
      <Text style={styles.titleText}>ATLAS</Text>
      <Text style={styles.underText}>About</Text>
      <Text style={styles.creditText}>Creators: Aaditya Agnihotri</Text>
      <Text style={styles.credit3Text}>         Atharva Goel</Text>
      <Text style={styles.credit2Text}>Version Number: 0.0.0</Text>
      <Text style={styles.credit2Text}>© 2022 All Rights Reserved</Text>
      <View style={styles.container3}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <LinearGradient colors={['#00FFFE', '#31f48e']} style={styles.abthomeButton}>
            <Text style={styles.buttonText}>  Home  </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 
const Stack = createStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Single" component={SingleScreen} />
        <Stack.Screen name="Join" component={JoinScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4db4d7',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#4db4d7',
    alignItems: 'center',
    paddingLeft: 230,
    paddingTop: 220,
  },
  container3: {
    flex: 1,
    backgroundColor: '#4db4d7',
    alignItems: 'center',
    paddingLeft: 210,
    paddingTop: 130,
  },
  container4: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingTop: 10,
    paddingBottom: 30,
  },
  container5: {
    flex: 1,
    backgroundColor: '#4db4d7',
    alignItems: 'center',
    paddingBottom: 50,
  },
  container6: {
    flex: 1,
    backgroundColor: '#4db4d7',
    alignItems: 'center',
    paddingTop: 100,
    paddingLeft: 210,
  },
  titleText: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 90,
    color: '#31f48e',
  },
  underText: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 48,
    color: '#31f48e',
  },
  joinText: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 48,
    color: '#31f48e',
    marginBottom: 70,
  },
  singleButton: {
    backgroundColor: '#31f48e',
    borderRadius: 20,
    elevation: 20,
    height: 50,
    marginTop: 40,
  },
  buttonText: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#ffffff',
  },
  multiButton: {
    backgroundColor: '#31f48e',
    borderRadius: 20,
    elevation: 20,
    height: 50,
    marginTop: 40,
    marginBottom: 20,
  },
  tinyLogo: {
    width: '85%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  abthomeButton: {
    backgroundColor: '#31f48e',
    borderRadius: 20,
    elevation: 20,
    height: 50,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  creditButton: {
    backgroundColor: '#31f48e',
    borderRadius: 20,
    elevation: 20,
    height: 50,
    marginTop: 20,
    marginBottom: 35,
  },
  creditText: {
    fontFamily: 'serif',
    fontSize: 25,
    color: '#000000',
    marginTop: 150,
  },
  credit2Text: {
    fontFamily: 'serif',
    fontSize: 25,
    color: '#000000',
    marginTop: 20,
  },
  credit3Text: {
    fontFamily: 'serif',
    fontSize: 25,
    color: '#000000',
    marginTop: 5,
  },
   mhomeButton: {
    backgroundColor: '#31f48e',
    borderRadius: 20,
    elevation: 20,
    height: 50,
    zIndex: 1,
  },
  shomeButton: {
    backgroundColor: '#31f48e',
    borderRadius: 20,
    elevation: 20,
    height: 50,
  },
  enterButton: {
    backgroundColor: '#31f48e',
    borderRadius: 20,
    elevation: 20,
    height: 50,
  },
  enterText: {
    fontFamily: 'serif',
    fontSize: 30,
    color: '#000000',
    marginTop: 30,
  },
  normText: {
    fontFamily: 'serif',
    fontSize: 30,
    color: '#000000',
    marginTop: 50,
  },
  normundText: {
    fontFamily: 'serif',
    fontSize: 30,
    color: '#000000',
  },
  normunsText: {
    fontFamily: 'serif',
    fontSize: 30,
    color: '#000000',
    marginTop: 25,

  },
  normunaText: {
    fontFamily: 'serif',
    fontSize: 25,
    color: '#000000',
    marginTop: 25
  },
  sansinput: {
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
  },
  codeinput: {
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
    marginBottom: 30,
  },
});
 
export default App;