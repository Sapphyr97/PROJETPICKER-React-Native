
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Avatar from './src/composants/Avatar';
import Users from './src/composants/Users';
import Contact from './src/composants/Contact'

export default function App() {
  return (

      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex: 1, backgroundColor: 'pink'}}>
          <Avatar/>
        </View> 
        
        <View style={{flex: 2}}>
          <ImageBackground source={require('./assets/12356544.webp')} style={styles.image}>
              <Users/>
          </ImageBackground>
        </View>
        
        <View style={{flex: 0.5, backgroundColor: 'pink'}}>
          <Contact/>
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    width:null,
    height:null,

  }
})
