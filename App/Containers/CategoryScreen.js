import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'
import Button from '../Components/Button'

import styles from './Styles/CategoryScreenStyle'

class CategoryScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.actualContainer}>
          <Text style={styles.header}>Select your account</Text>
          <Button
            onPress={() => this.props.navigation.navigate('AccountSetupScreen')}
            value='I want to work' />
          <Button value='I want to hire' />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen)
