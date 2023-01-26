import { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import FocusedStatusBar from '../components/FocusedStatusBar';
import { COLORS } from '../constants';

const IncomeScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        'https://backend-kkp.herokuapp.com/api/v1/income'
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
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default IncomeScreen;
