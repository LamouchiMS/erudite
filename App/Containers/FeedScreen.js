import React, {Component} from 'react'
import {ScrollView, Text, View, Image, TouchableNativeFeedback} from 'react-native'
import {connect} from 'react-redux'
import styles from './Styles/FeedScreenStyle'
import faker from 'faker'
import Icon from 'react-native-vector-icons/MaterialIcons'

class FeedScreen extends Component {
  render () {
    let arr = []
    for (var i = 0; i < 10; i++) {
      arr.push(i)
    }
    return (
      <ScrollView style={styles.bg}>
        <View style={styles.container}>
          {arr.map((e, i) => (
            <View key={i} style={styles.card}>
              <View style={styles.header}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: faker
                    .image
                    .avatar()
                  }} />
                <Text style={styles.name}>{faker
                    .name
                    .findName()}</Text>
                <View style={styles.fill} />
                <Text style={styles.place}>{faker
                    .address
                    .state()}</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.description}>{faker
                    .lorem
                    .paragraph()}</Text>
              </View>
              <View style={styles.skills}>
                {arr
                  .filter(e => e % 2 === 0)
                  .map((e, i) => (
                    <Text key={i * 100} style={styles.chip}>{faker
                        .company
                        .bsAdjective()}</Text>
                  ))}
              </View>
              <View style={styles.footer}>
                <View style={styles.iconBlock}>
                  <Icon name='favorite' size={17} color='#64B5F6' />
                  <Text style={styles.label}>{Math.floor(Math.random() * 500 + 500)}</Text>
                </View>
                <View style={styles.iconBlock}>
                  <Icon name='monetization-on' size={24} color='#64B5F6' />
                  <Text style={styles.label}>{'$' + Math.floor(Math.random() * 50 + 10) + '/h'}</Text>
                </View>
                <View style={styles.fill} />
                <TouchableNativeFeedback>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Book now</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen)
