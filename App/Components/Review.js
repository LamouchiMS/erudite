import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import Rating from './Rating'
import styles from './Styles/ReviewStyle'

export default class Review extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.img}
            source={{
              uri: this.props.avatar
            }} />
          <View style={styles.headerColumn}>
            <Text style={styles.name}>{this.props.name}</Text>
            <Rating value={this.props.rating} />
          </View>
        </View>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}
