import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, { forwardRef, useCallback, useMemo } from 'react';
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export type Ref = BottomSheetModal;

const Buses = () => {
  const snapPoints = useMemo(() => ['38%'], []);
  return (
    <View style={styles.contentContainer}>    
      <Link href={'/(Modal)/DetalleBus'} asChild>
        <TouchableOpacity > 
          <View style={styles.item}>
            <Image style={styles.bike} source={require('@/assets/images/transcayma.png')} />
            <Text style={{ flex: 1, fontSize: 20}}>  TransCayma</Text>
            <Ionicons name="information-circle-outline" size={30} color={Colors.blue} />
          </View>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity>
        <View style={[styles.item, { marginVertical: 10 }]}>
          <Image style={styles.bike} source={require('@/assets/images/aqpMasivo.png')} />
          <Text style={{ flex: 1, fontSize: 20 }}>  AqpMasivo</Text>
          <Ionicons name="information-circle-outline" size={30} color={Colors.blue} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.item}>
          <Image style={styles.bike} source={require('@/assets/images/c9.png')} />
          <Text style={{ flex: 1, fontSize: 20 }}>  3 de Octubre</Text>
          <Ionicons name="information-circle-outline" size={30} color={Colors.blue} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={[styles.item, { marginVertical: 10 }]}>
          <Image style={styles.bike} source={require('@/assets/images/unionaqp.png')} />
          <Text style={{ flex: 1, fontSize: 20 }}>  Unión AQP</Text>
          <Ionicons name="information-circle-outline" size={30} color={Colors.blue} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.grey,
    borderRadius: 20
    
  },
  bike: {
    width: 100,
    height: 60,
  },
  
});

export default Buses;