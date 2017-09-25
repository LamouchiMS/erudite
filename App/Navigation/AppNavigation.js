import React from 'react'
import {StackNavigator} from 'react-navigation'
import ProfileScreen from '../Containers/ProfileScreen'
import FeedScreen from '../Containers/FeedScreen'
import AccountSetupScreen from '../Containers/AccountSetupScreen'
import CategoryScreen from '../Containers/CategoryScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Text, View} from 'react-native'
import {Colors} from '../Themes'

import styles from './Styles/NavigationStyles'

function getHeader (title, navigation) {
  return {headerTitle: (
    <Text onPress={() => navigation.goBack()} style={styles.headerTitle}>{title}</Text>
    ),
    headerLeft: (<Icon
      color={'#2196F3'}
      style={{
        marginLeft: 10
      }}
      size={25}
      name={'chevron-left'}
      onPress={() => {
        navigation.goBack()
      }} />)}
}

function getAltHeader (title, navigation, bgColor, iconLeft, iconRight) {
  return {
    headerTitle: (
      <View style={styles.headerContainer}>
        <Text onPress={() => navigation.goBack()} style={styles.headerTitle}>{title}</Text>
      </View>
    ),
    headerLeft: (<Icon
      color={'#2196F3'}
      style={{
        marginLeft: 20
      }}
      size={25}
      name={iconLeft}
      onPress={() => {
        navigation.goBack()
      }} />),
    headerRight: (<Icon
      color={'#2196F3'}
      style={{
        marginRight: 20
      }}
      size={25}
      name={iconRight}
      onPress={() => {
        navigation.goBack()
      }} />),
    headerStyle: [
      styles.header, {
        backgroundColor: bgColor
      }
    ]
  }
}

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => (getAltHeader('PROFILE', navigation, 'white', 'menu', 'chat'))
  },
  FeedScreen: {
    screen: FeedScreen,
    navigationOptions: ({navigation}) => (getAltHeader('FEED', navigation, Colors.snow, 'menu', 'search'))
  },
  AccountSetupScreen: {
    screen: AccountSetupScreen,
    navigationOptions: ({navigation}) => (getHeader('', navigation))
  },
  CategoryScreen: {
    screen: CategoryScreen,
    navigationOptions: ({navigation}) => (getHeader('', navigation))
  },
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: {
      header: null
    }
  }
}, {
  // Default config for all screens
  initialRouteName: 'ProfileScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
