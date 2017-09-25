import {StyleSheet} from 'react-native'
import {Colors} from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: 'white',
    elevation: 0,
    flexDirection: 'row',
    paddingTop: 10
  },
  altHeader: {
    backgroundColor: '#fafafa',
    elevation: 0,
    flexDirection: 'row',
    paddingTop: 10
  },
  whiteHeader: {
    backgroundColor: 'white',
    elevation: 0,
    flexDirection: 'row',
    paddingTop: 10
  },
  headerTitle: {
    fontFamily: 'RobotoMono-Bold',
    color: Colors.blue,
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center'
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
