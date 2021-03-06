/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import ImageComponent from './study_js/ImageComponent';
import BlinkApp from './study_js/StateJs'
import LotsOfStyles from './study_js/LotsOfStyles'
import FixedDimensionsBasics from './study_js/FixedDimensionsBasics'
import FlexboxBasics from './study_js/FlexboxBasics'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <View style={{marginBottom: 20}}>
            <Text style={styles.title_s}>1、Props（属性）</Text>
            <ImageComponent />
        </View>
        <View style={styles.marginBottom_s}>
          <ImageComponent />
        </View>
        <View style={{ height: 80}}>
            <Text style={styles.title_s}>2、State（状态）</Text>
            <BlinkApp />
        </View>
        <View style={styles.marginBottom_s}>
            <Text style={styles.title_s}>3、样式</Text>
            <LotsOfStyles />
        </View>
        <View style={styles.marginBottom_s}>
            <Text style={styles.title_s}>4、高度与宽度</Text>
            <FixedDimensionsBasics />
        </View>

      <View style={styles.marginBottom_s}>
  <Text style={styles.title_s}>5、使用Flexbox布局</Text>
      <FlexboxBasics />
      </View>



        </View>
        </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
    title_s: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  marginBottom_s: {
    marginBottom: 5,
  },
});
