import {StyleSheet, Dimensions} from 'react-native'
import {Colors} from '../../Themes/'

const {width} = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  img: {
    height: 140,
    width
  },
  overlay: {
    backgroundColor: Colors.blue,
    opacity: 0.8,
    flex: 1
  },
  info: {
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingTop: 30
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontFamily: 'RobotoMono-Medium',
    fontSize: 17,
    color: Colors.blue
  },
  fill: {
    flex: 1
  },
  place: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 9,
    color: Colors.blue
  },
  btn: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#64B5F6'
  },
  btnText: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 14,
    color: Colors.snow
  },
  text: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 14,
    color: Colors.blue,
    paddingVertical: 40
  },
  skills: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  skillsContainer: {
    backgroundColor: '#F1F9FF',
    paddingHorizontal: 25,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)'
  },
  label: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 14,
    color: Colors.blue,
    paddingBottom: 20
  },
  chip: {
    borderWidth: 1,
    borderColor: '#BCE0FD',
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 6,
    fontFamily: 'RobotoMono-Regular',
    fontSize: 9,
    color: Colors.blue,
    marginRight: 9,
    marginBottom: 9
  },
  reviewsContainer: {
    backgroundColor: '#F1F9FF',
    paddingHorizontal: 25,
    paddingVertical: 30
  }
})
