import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants';

const Card = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Tanggal: {data.tanggal}</Text>
      <Text style={styles.content}>Kategori: {data.kategori}</Text>
      <Text style={styles.content}>Tunai: {data.nominal_tunai}</Text>
      <Text style={styles.content}>Transfer: {data.nominal_transfer}</Text>
      <Text style={styles.content}>Keterangan: {data.keterangan}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkgreen,
    borderRadius: SIZES.font,
    marginBottom: SIZES.base / 4,
    margin: SIZES.medium,
    padding: SIZES.medium,
    ...SHADOWS.dark,
  },
  content: {
    fontSize: SIZES.large,
    color: COLORS.white,
  },
});

export default Card;
