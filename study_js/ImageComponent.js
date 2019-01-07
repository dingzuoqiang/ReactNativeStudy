/**
 * Props（属性）
 * Created by DingZuoQiang on 2019/1/4.
 */

import React, {Component} from 'react';
import {View,Image} from 'react-native';

export default class ImageComponent extends Component {
  render() {
      let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}

