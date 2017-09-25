import React, {Component} from 'react'
import {View, TextInput} from 'react-native'
import {Colors} from '../Themes'
import styles from './Styles/InputStyle'

export default class Input extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Full name'
          placeholderTextColor={Colors.blue}
          underlineColorAndroid={Colors.blue}
          />
      </View>
    )
  }
}
