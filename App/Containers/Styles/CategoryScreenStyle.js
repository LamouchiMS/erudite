import {StyleSheet} from 'react-native'
import {Colors} from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  actualContainer: {
    flex: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 25
  },
  header: {
    fontFamily: 'RobotoMono-Medium',
    fontSize: 17,
    color: Colors.blue,
    marginBottom: 10
  }
})
