/**
 * 高度与宽度
 * Created by DingZuoQiang on 2019/1/7.
 */
import React, { Component } from 'react';
import { AppRegistry, View,Text } from 'react-native';

export default class FixedDimensionsBasics extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>指定宽高</Text>
                    <View style={{width: 20, height: 20, backgroundColor: 'powderblue'}} />
                    <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
                    <View style={{width: 40, height: 40, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{width: 150, height: 150}}>
                    <Text>弹性（Flex）宽高</Text>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>
            </View>
    );
    }
}
