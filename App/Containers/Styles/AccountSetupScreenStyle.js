import {StyleSheet} from 'react-native'
import {Colors} from '../../Themes/'

export default StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 25,
    width: 300
  },
  header: {
    fontFamily: 'RobotoMono-Medium',
    fontSize: 17,
    color: Colors.blue,
    marginBottom: 10,
    width: 300
  },
  btnContainer: {
    width: 300,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
})
