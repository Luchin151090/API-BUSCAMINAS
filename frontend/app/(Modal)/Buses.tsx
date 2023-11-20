import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export type Ref = BottomSheetModal;

const Buses = () => {
  const snapPoints = useMemo(() => ['38%'], []);

  const [busname, setBusname] = useState([]);

  const fetchData = () => {
    return axios.get("http://10.0.2.2:8003/api/bus")
    .then((response) => setBusname(response.data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <View style={styles.contentContainer}>
      {busname.map((bus, index) => (
        <Link key={index} href={'/(Modal)/DetalleBus'} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Text style={{ flex: 1, fontSize: 20 }}> {bus.nombre_empresa}</Text>
              <Ionicons name="information-circle-outline" size={30} color={Colors.blue} />
            </View>
          </TouchableOpacity>
        </Link>
      ))}
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
    borderRadius: 20,
    marginBottom: 10,
    
  },
  bike: {
    width: 100,
    height: 60,
  },
  
});

export default Buses;