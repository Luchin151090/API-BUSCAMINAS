import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React, { forwardRef, useCallback, useMemo } from 'react';
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['38%'], []);
  const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []);
  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: 'none' }}
      backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGrey }}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}>
      <View style={styles.contentContainer}>    

        <Link href={'/(Modal)/Buses'} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons name="bus-outline" size={20} color={Colors.blue} />
              <Text style={{ flex: 1 }}>Buses</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.blue} />
            </View>
          </TouchableOpacity>
        </Link>

        <Link href={'/(Modal)/Config'} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name="settings-outline" size={20} color={Colors.blue} />
            <Text style={{ flex: 1 }}>Configuración</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.blue} />
          </View>
        </TouchableOpacity>
        </Link>

        <Link href={'/(Modal)/TripHistory'} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name="reader-outline" size={20} color={Colors.blue} />
            <Text style={{ flex: 1 }}>Historial</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.blue} />
          </View>
        </TouchableOpacity>
        </Link>

        <Link href={'/(Modal)/CustomerSupport'} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name="call-outline" size={20} color={Colors.blue} />
            <Text style={{ flex: 1 }}>Atención al cliente</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.blue} />
          </View>
        </TouchableOpacity>
        </Link>

        <Link href={'/(Modal)/location-search'} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name="map-outline" size={20} color={Colors.blue} />
            <Text style={{ flex: 1 }}>Mapa</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.blue} />
          </View>
        </TouchableOpacity>
        </Link>

        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
        <Ionicons name="arrow-down-outline" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 32,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  activeText: {
    color: '#fff',
    fontWeight: '700',
  },
  toggleInactive: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  inactiveText: {
    color: Colors.primary,
  },
  button: {
    backgroundColor: Colors.blue,
    padding: 10,
    margin: 5,
    borderRadius: 20,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 16,
    fontWeight: '600',
    margin: 16,
  },
  item: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
});

export default BottomSheet;
