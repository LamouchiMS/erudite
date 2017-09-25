import React, {Component} from 'react'
import {Text, View, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
import Button from '../Components/Button'
import Input from '../Components/Input'

import styles from './Styles/AccountSetupScreenStyle'

class AccountSetupScreen extends Component {
  render () {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.header}>{"What's your name?"}</Text>
          <Input />
          <View style={styles.btnContainer}>
            <Button
              onPress={() => this.props.navigation.navigate('FeedScreen')}
              small
              value='Next' />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetupScreen)
