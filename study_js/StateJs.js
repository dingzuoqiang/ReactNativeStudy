/**
 * Created by DingZuoQiang on 2019/1/4.
 */

import React, {Component} from 'react';
import {Text,View} from 'react-native'

class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {isShowingText:true}
        // 每1000ms 对showText状态做一次取反操作
        setInterval(()=>{
            this.setState(previousState=>{
            return{isShowingText:!previousState.isShowingText}
        });
        },1000);
    }

    render(){
        // 根据当前showText的值决定是否显示text内容
        if (!this.state.isShowingText) {
            return null;
        }
        return(
            <Text>{this.props.text}</Text>
        );
     }

}

export default class BlinkApp extends Component{

    render(){
    return(
        <View>
            <Blink text='学习使我快乐'/>
            <Blink text='好好学习，天天向上'/>
        </View>
    );
}

}
