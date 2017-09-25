import React, {Component} from 'react'
import {Text, Image, View, TouchableNativeFeedback} from 'react-native'
import {Images} from '../Themes'
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <Image source={Images.eruditeLogo} style={styles.logo} />
          <Text style={styles.header}>{'Erudite'}</Text>
          <Text style={styles.text}>{'Stand on the\nshoulders of giants'}</Text>
        </View>
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('CategoryScreen')}
          style={styles.btn}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Sign in with Facebook</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}
