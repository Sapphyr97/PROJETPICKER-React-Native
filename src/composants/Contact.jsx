import { Button, Text, View,Linking,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser'

export default function Sms() {
            const openSms = () =>{
                Linking.openURL("sms:0781450074")
            }
            
            const openTel = () =>{
                Linking.openURL("tel:0781450074")
            }
            
            const openMail = () =>{
                Linking.openURL("mailto:erlong.laina@gmail.com")
            }

            const openSocial = () =>{
              WebBrowser.openBrowserAsync("")
          }


  {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={openSms} style={styles.touchableOpacity}><Text>SMS</Text></TouchableOpacity>
        <TouchableOpacity onPress={openTel} style={styles.touchableOpacity}><Text>Téléphone</Text></TouchableOpacity>
        <TouchableOpacity onPress={openMail} style={styles.touchableOpacity}><Text>Mail</Text></TouchableOpacity>
        <TouchableOpacity onPress={openSocial} style={styles.touchableOpacity}><Text>Social</Text></TouchableOpacity>
      </View>
    )
  }
}
/*WebBrowser permet de rester sur l'application a
près le click vers les réseaux alors que le Link sors de l'appli*/

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
    },
    touchableOpacity: {
        marginTop:30,
        marginLeft:20,
        padding:15, 
        textAlign: 'center',
        backgroundColor:'#FF1493',
        borderRadius:5
    }

});