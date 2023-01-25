import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import HomeHeader from '../components/HomeHeader';
import { COLORS, SIZES, SHADOWS } from '../constants';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.darkgreen} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <HomeHeader />
          {/* Income */}
          <View
            style={{
              backgroundColor: COLORS.darkgreen,
              height: 700,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          >
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate('Income')}
            >
              <View style={styles.card}>
                <Text style={styles.content}>Data Pemasukan</Text>
              </View>
            </TouchableOpacity>

            {/* Outcome */}
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate('Outcome')}
            >
              <View style={styles.card}>
                <Text style={styles.content}>Data Pengeluaran</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// styles
const styles = StyleSheet.create({
  touchable: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.extraLarge,
    ...SHADOWS.dark,
  },
  card: {
    width: '100%',
    height: 100,
    padding: SIZES.medium,
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    textAlign: 'left',
    color: COLORS.darkgreen,
    fontSize: SIZES.extraLarge,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
});

export default HomeScreen;
