import React, {Component} from 'react'
import {
  ScrollView,
  TouchableNativeFeedback,
  Text,
  View,
  Image
} from 'react-native'
import {connect} from 'react-redux'
import faker from 'faker'
import Review from '../Components/Review'

import styles from './Styles/ProfileScreenStyle'

class ProfileScreen extends Component {
  constructor (props) {
    super(props)
    let skills = []
    let reviews = []
    for (var i = 0; i < 6; i++) {
      skills.push(faker.company.bsAdjective())
      reviews.push({
        avatar: faker
          .image
          .avatar(),
        name: faker
          .name
          .findName(),
        rating: Math.floor(Math.random() * 5),
        text: faker
          .hacker
          .phrase()
      })
    }
    this.state = {
      name: faker
        .name
        .findName(),
      address: faker
        .address
        .city() + ', ' + faker
        .address
        .stateAbbr(),
      description: faker
        .lorem
        .paragraph(),
      skills,
      image: faker
        .image
        .image(),
      reviews
    }
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.img} source={{
          uri: this.state.image
        }}><View style={styles.overlay} /></Image>
        <View style={styles.info}>
          <View style={styles.header}>
            <View style={styles.leftheader}>
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.place}>{this.state.address}</Text>
            </View>
            <View style={styles.fill} />
            <TouchableNativeFeedback>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Book now</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <Text style={styles.text}>{this.state.description}</Text>
        </View>
        <View style={styles.skillsContainer}>
          <Text style={styles.label}>SKILLS</Text>
          <View style={styles.skills}>
            {this
              .state
              .skills
              .map((e, i) => (
                <Text key={i} style={styles.chip}>{e}</Text>
              ))}
          </View>
        </View>
        <View style={styles.reviewsContainer}>
          <Text style={styles.label}>REVIEWS</Text>
          <View style={styles.review}>
            {this
              .state
              .reviews
              .map((e, i) => (<Review
                key={i * 100}
                name={e.name}
                avatar={e.avatar}
                rating={e.rating}
                text={e.text} />))}
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
