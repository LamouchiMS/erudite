import {StyleSheet, Dimensions} from 'react-native'
import {Colors} from '../../Themes/'

const {width} = Dimensions.get('window')

export default StyleSheet.create({
  bg: {
    backgroundColor: '#fafafa',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    backgroundColor: 'white',
    elevation: 1,
    marginVertical: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: width * 0.95
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 20
  },
  name: {
    fontFamily: 'RobotoMono-Medium',
    fontSize: 14,
    color: Colors.blue
  },
  place: {
    fontFamily: 'RobotoMono-Italic',
    fontSize: 11,
    color: Colors.blue
  },
  fill: {
    flex: 1
  },
  content: {
    marginVertical: 20
  },
  description: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 14,
    color: '#64B5F6',
    lineHeight: 19
  },
  skills: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  chip: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 9,
    color: 'white',
    backgroundColor: '#64B5F6',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 9,
    marginRight: 9,
    marginVertical: 4
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  iconBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20
  },
  label: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 14,
    color: '#64B5F6',
    marginLeft: 5
  },
  btnText: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 14,
    color: '#64B5F6',
    padding: 10
  }
})
