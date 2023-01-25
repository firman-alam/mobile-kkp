import { View, Text, Image } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        padding: SIZES.font,
        marginTop: SIZES.extraLarge,
        marginBottom: SIZES.extraLarge,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <View style={{ width: 100, height: 100 }}>
        <Image
          source={assets.ATTIIN}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.extraLarge,
            color: COLORS.secondary,
            textAlign: 'center',
          }}
        >
          Keuangan
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            color: COLORS.secondary,
            marginTop: SIZES.base / 2,
            textAlign: 'center',
          }}
        >
          Masjid At-Tiin Asembaris
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
