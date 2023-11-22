import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import React, { useRef , useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Link} from 'expo-router'
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheet from './BottomSheet';
import MapView from 'react-native-maps';


const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>

        <Link href={'/(Modal)/location-search'} asChild>
          <TouchableOpacity style={styles.button}> 
              <Ionicons style={styles.searchIcon} name="bus-outline" size={20} color={Colors.white} />
              <Text style={{ flex:10, color: 'white' }}>Origen</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href={'/(Modal)/location-search'} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons style={styles.searchIcon} name="location-outline" size={20} color={Colors.white} />
            <Text style={{ flex:10, color: 'white' }}>Destino</Text>
            </TouchableOpacity>
        </Link>
      
    </View>
    
    <View style={styles.searchButton}>
      <TouchableOpacity style={styles.button2}>
        <Ionicons name="search-outline" size={20} color={Colors.white} />
      </TouchableOpacity>
    </View>
  </View>
);

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  
  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  const [location, setLocation] = useState({
    latitude: -16.423399904631825,
    longitude:  -71.55657756931967,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  return (
    
    <SafeAreaView style={[styles.safeArea, { paddingTop: 35 }]}>
      <BottomSheet ref={bottomSheetRef} />
        <View style={styles.container}>
          <TouchableOpacity onPress={openModal}>
            <Image style={styles.bike} source={require('@/assets/images/BusIcon.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
            <Text style={styles.title}>BusCaminas</Text>
            <View style={styles.locationName}>
              <Text style={styles.subtitle}>Universidad La Salle</Text>
              <Ionicons name="location-sharp" size={20} color={Colors.blue} />
            </View>
          </TouchableOpacity>

          <Link href={'/(Modal)/Login'} asChild>
            <TouchableOpacity style={styles.profileButton}  >
              <Ionicons name="person-outline" size={20} color={Colors.blue} />
            </TouchableOpacity>
          </Link>

        </View>
        <SearchBar />
        <View style={{ height: 1000 }}>
          <MapView style={styles.map} region={location} />
        </View>
        
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    paddingLeft:34,
    backgroundColor: Colors.blue,
    padding: 12,
    margin: 1,
    borderRadius: 15,
    alignItems: 'center',
    width: '48.5%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    

  },
  button2: {
    backgroundColor: Colors.medium,
    padding: 10,
    margin: 5,
    borderRadius: 50,
    alignItems: 'center',
    width: '15%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  bike: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  locationName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    height: 100,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.blue,
    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  searchIcon: {
    paddingLeft: 10,
    
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
  },
  searchButton: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    flex: 0.73,
    width: '100%',
    height: '100%',
  },
});



export default CustomHeader;