import { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import Card from '../components/Card';
import FocusedStatusBar from '../components/FocusedStatusBar';
import { COLORS } from '../constants';

const OutcomeScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        'https://backend-kkp.herokuapp.com/api/v1/outcome'
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar background={COLORS.darkgreen} />
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
