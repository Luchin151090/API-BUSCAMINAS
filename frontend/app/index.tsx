import { Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
//import Categories from '../Components/Categories';
import { SafeAreaView } from 'react-native-safe-area-context';
//import Restaurants from '../Components/Restaurants';
import Colors from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';


const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        
  
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Page;
