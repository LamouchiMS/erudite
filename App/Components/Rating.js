import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View} from 'react-native'
import styles from './Styles/RatingStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Colors} from '../Themes'

export default class Rating extends Component {
  render () {
    let arr = []
    for (var i = 0; i < 5; i++) {
      arr.push(i < this.props.value
        ? 'star'
        : 'star-border')
    }
    return (
      <View style={styles.container}>
        {arr.map((e, i) => (<Icon style={styles.icon} key={i * 5} name={e} size={10} color={Colors.blue} />))}
      </View>
    )
  }
}
