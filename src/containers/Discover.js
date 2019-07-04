import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

import EventCard from '../components/EventCard';

export default function Discover() {
  return (
    <View style={{flex: 3, height: 100, backgroundColor: 'red', justifyContent: 'center'}}>
      <EventCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  }
});