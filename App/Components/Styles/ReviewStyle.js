import {StyleSheet} from 'react-native'
import {Colors} from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 2,
    marginVertical: 10,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20
  },
  name: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 14,
    color: Colors.blue,
    paddingBottom: 4
  },
  text: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 14,
    color: Colors.blue
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 20,
    borderRadius: 40
  }
})
