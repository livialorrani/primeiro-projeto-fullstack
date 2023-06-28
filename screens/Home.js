import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import Carousel from './carousel/carousel';
import { dummyData } from './../assets/data';

const Home = ({ navigation, route }) => {
//const [data,setData] = useState([])
//const [loading,setLoading]= useState(true)
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => {
    return state;
  });

  console.log(data, loading);

  const fetchData = () => {
    fetch('http://192.168.0.115:3000/')
      .then((res) => res.json())
      .then((results) => {
        // setData(results)
        // setLoading(false)
        dispatch({ type: 'ADD_DATA', payload: results });
        dispatch({ type: 'SET_LOADING', payload: false });
      })
      .catch((err) => {
        Alert.alert('someting went wrong');
      });
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  const renderList = (item) => {
    return (
      <Card
        style={styles.mycard}
        onPress={() => navigation.navigate('Profile', { item })}
      >
        <View style={styles.cardView}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={{ uri: item.picture }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.author}</Text>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Carousel data={dummyData} />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={(item) => item._id}
        onRefresh={() => fetchData()}
        refreshing={loading}
      />

      <FAB
        onPress={() => navigation.navigate('Create')}
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{ colors: { accent: '#46737F' } }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mycard: {
    margin: 5,
  },
  cardView: {
    flexDirection: 'row',
    padding: 6,
  },
  text: {
    fontSize: 18,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;