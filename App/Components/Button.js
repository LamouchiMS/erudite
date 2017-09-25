import React, {Component} from 'react'
import {View, Text, TouchableNativeFeedback} from 'react-native'
import styles from './Styles/ButtonStyle'

export default class Button extends Component {
  render () {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View
          style={[
            styles.btnContainer, this.props.small
            ? styles.small
            : {}
          ]}>
          <Text style={styles.btnText}>{this.props.value}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}
