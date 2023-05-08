/**
 * @format
 * @flow strict-local
 */

import React, {
  useState, useEffect,
} from 'react';

import {
  View, StyleSheet,
} from 'react-native';

import MapView, {UrlTile} from 'react-native-maps';

const MarkScreen = () => {
  return (
  <View style={styles.container}>
    <MapView style={{flex: 1, width: '100%', height: '100%'}}>
      <UrlTile
        urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maximumZ={19}
        flipY={false}
      />
    </MapView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MarkScreen;
