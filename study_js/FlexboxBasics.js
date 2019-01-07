/**
 * 使用Flexbox布局
 * Created by DingZuoQiang on 2019/1/7.
 */
import React, { Component } from 'react';
import { AppRegistry, View,Text } from 'react-native';

export default class FlexboxBasics extends Component {
    render() {
        return (
            <View>
                <Text>5.1 Flex Direction:flexDirection决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向</Text>
                <View style={{width: 150, height: 150,backgroundColor: 'red', flexDirection: 'row'}}>
                    <View style={{width: 20, height: 20, backgroundColor: 'powderblue'}} />
                    <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
                    <View style={{width: 40, height: 40, backgroundColor: 'steelblue'}} />
                </View>

                <Text>5.2 Justify Content:justifyContent可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end、space-around、space-between以及space-evenly</Text>
                <View style={{width: 150, height: 150,backgroundColor: 'red', flexDirection: 'row',justifyContent: 'space-evenly'}}>
                    <View style={{width: 20, height: 20, backgroundColor: 'powderblue'}} />
                    <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
                    <View style={{width: 40, height: 40, backgroundColor: 'steelblue'}} />
                </View>

                <Text>5.3 Align Items:alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end以及stretch</Text>
                <View style={{width: 150, height: 150,backgroundColor: 'red', flexDirection: 'row',justifyContent: 'space-evenly',alignItems: 'center'}}>
                    <View style={{width: 20, height: 20, backgroundColor: 'powderblue'}} />
                    <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
                    <View style={{width: 40, height: 40, backgroundColor: 'steelblue'}} />
                </View>

            </View>
    );
    }
}
