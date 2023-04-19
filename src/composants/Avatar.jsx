import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AvatarImage() {
  const [avatar, setAvatar] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 1,
    });


    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical:100 }}>
      <TouchableOpacity onPress={pickImage}>
        {avatar && <Image source={{ uri: avatar }} style={{ width: 50, height: 50, borderRadius:150 }} />}
      </TouchableOpacity>
      
      <TouchableOpacity onPress={pickImage}><Text>Avatar</Text></TouchableOpacity>
      
      <Button title="Choix Avatar" color='#330855' width='70' height= '70' onPress={pickImage} />
     
    
        
    </View>
  );
}