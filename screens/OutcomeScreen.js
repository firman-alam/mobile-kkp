import {
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import Card from '../components/Card';
import { COLORS } from '../constants';
import useFetch from '../utils/useFetch';

const OutcomeScreen = () => {
  const { data, loading } = useFetch(
    'https://backend-kkp.herokuapp.com/api/v1/outcome'
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Card data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default OutcomeScreen;
