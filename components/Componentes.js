
import React from 'react';
import {Alert, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SuaLocalizacao({lat, long}){
  return(
      <View style={styles.positonBox}>
        <Text style={styles.positonBoxTitle}>Sua Localização</Text>
        <View style={styles.positonBoxLatLon}>
          <Text style={{fontSize: 16}}>Lat.</Text>
          <Text style={{fontSize: 16}}>{lat}</Text>
        </View>
        <View style={styles.positonBoxLatLon}>
          <Text style={{fontSize: 16}}>Lon.</Text>
          <Text style={{fontSize: 16}}>{long}</Text>
        </View>
      </View>
  );
}

function LocaltionButton({reqLoc}){
  return(
      <TouchableOpacity
        style={styles.locationButton}
        onPress={() => { reqLoc }}>
        <Icon name="my-location" color={'#fff'} size={30} />
      </TouchableOpacity>
  );
}

export {SuaLocalizacao, LocaltionButton};

const styles = StyleSheet.create({
  positonBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    opacity: 0.75,
    marginTop: -170,
    marginHorizontal: 40,
     paddingVertical: 15,
     paddingHorizontal: 20,
    shadowColor: '#000',
    elevation: 5,

  },
  positonBoxTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1417A8',
  },
  positonBoxLatLon: {flexDirection: 'row', justifyContent: 'space-between'},
  locationButton: {
    backgroundColor: '#1417A8',
    borderRadius: 150,
    marginTop: -15,
    width: 50,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 8,
  },
});
