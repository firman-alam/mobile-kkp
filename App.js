import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import IncomeScreen from './screens/IncomeScreen';
import OutcomeScreen from './screens/OutcomeScreen';

import { COLORS, SIZES } from './constants';

const Stack = createNativeStackNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Outcome'
          component={OutcomeScreen}
          options={{
            headerStyle: { backgroundColor: COLORS.darkgreen },
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
            },
            headerTintColor: COLORS.white,
            headerTitle: 'Data Pengeluaran',
          }}
        />
        <Stack.Screen
          name='Income'
          component={IncomeScreen}
          options={{
            headerStyle: { backgroundColor: COLORS.darkgreen },
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
            },
            headerTintColor: COLORS.white,
            headerTitle: 'Data Pemasukan',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
