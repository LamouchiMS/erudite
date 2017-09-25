import {StyleSheet, Dimensions} from 'react-native'
import {ApplicationStyles, Colors} from '../../Themes/'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: height * 0.2
  },
  logo: {
    height: 75,
    width: 75
  },
  header: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 32,
    color: Colors.blue,
    textAlign: 'center'
  },
  text: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 20,
    textAlign: 'center',
    color: Colors.blue,
    paddingTop: 75,
    lineHeight: 26
  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width,
    backgroundColor: Colors.blue,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 14,
    color: Colors.snow,
    textAlign: 'center'
  }
})
