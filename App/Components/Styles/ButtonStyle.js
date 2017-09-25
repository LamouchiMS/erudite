import {StyleSheet} from 'react-native'
import {Colors} from '../../Themes'

export default StyleSheet.create({
  btnText: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 14,
    color: Colors.blue,
    textAlign: 'center'
  },
  btnContainer: {
    borderColor: Colors.blue,
    borderWidth: 1,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  small: {
    width: 100,
    margin: 0
  }
})
