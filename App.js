import React, {useState} from 'react';
import {PermissionsAndroid, Alert, View,Text,TouchableOpacity, StyleSheet,} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SuaLocalizacao, LocaltionButton} from './components/Componentes';

const App = () => {
  const [position, setPosition] = useState({
    latitude: -23.6480272781381,
    longitude: -46.72173947095871,
    latitudeDelta: 0.0302,
    longitudeDelta: 0.0103,
  });

  const request_location_runtime_permission = async () => {
  
    Geolocation.getCurrentPosition(
          pos => {
            setPosition({
              ...position,
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          },
          error => {
            console.log(error);
            Alert.alert('Houve um erro ao pegar a latitude e longitude.');
          },
        );

  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={position}
        onPress={e =>
          setPosition({
            ...position,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          })
        }>
        <Marker
          coordinate={position}
          title={'Marcador'}
          description={'Local selecionado'}
        />
      </MapView>
      <SuaLocalizacao lat={position.latitude} long={position.longitude}/>
      <LocaltionButton reqLoc={request_location_runtime_permission()}/>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Mapa</Text>
        <Text style={[styles.logoText, {color: '#e74c3c'}]}>Top</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '100%',
    width: '100%',
  },
  logo: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    elevation: 5,
    marginTop: -730,
    alignSelf: 'center',
    marginRight: 10,
    flexDirection: 'row',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default App;