import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RocketDetails = props => {
  props.navigation.setOptions({
    headerTitle: 'Rocket Details',
  });
  const {route} = props;
  const details = route && route.params && route.params.rocketDetails;
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.otherText,
          styles.rocketName,
        ]}>{`Rocket Name: ${details.rocket_name}`}</Text>
      <Text
        style={styles.otherText}>{`Rocket Type: ${details.rocket_type}`}</Text>
      <Text style={styles.otherText}>{`Reused: ${
        details.fairings ? details.fairings.reused : 'Not Applicable'
      }`}</Text>
    </View>
  );
};

export default RocketDetails;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  rocketName: {
    fontSize: 18,
  },
  otherText: {
    fontSize: 14,
    marginTop: 5,
  },
});
//   - rocket name should be size 18 font
//   - rocket type and whether its reused should be size 14 font
