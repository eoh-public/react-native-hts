import { Platform, StyleSheet } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { Colors } from '../../../configs';

export default StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: Colors.Black,
    paddingTop: getStatusBarHeight() + 16,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: -5,
  },
  commonButton: {
    width: 35,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDashboard: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.White,
    marginTop: Platform.select({
      android: -10,
      ios: 0,
    }),
  },
  navbar: {
    marginTop: Platform.select({
      android: -20,
      ios: 0,
    }),
  },
  topContent: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapDes: {
    flex: 1,
    backgroundColor: Colors.Charcoal,
    borderRadius: 4,
    justifyContent: 'center',
    marginRight: 16,
    padding: 16,
  },
  wraphumidity: {
    marginRight: 0,
  },
  humidityValue: {
    marginTop: 6,
  },
  wrapTemp: {
    backgroundColor: Colors.Charcoal,
    marginTop: 16,
    borderRadius: 4,
    padding: 16,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapDes2: {
    paddingHorizontal: 0,
    paddingBottom: 0,
    marginTop: -2,
  },
  wrapDes3: {
    paddingHorizontal: 0,
    paddingBottom: 0,
    marginLeft: 32,
    paddingRight: 0,
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 16,
  },
  desElectric: {
    fontSize: 10,
    color: Colors.Silver,
  },
  iconDropDown: {
    width: 12,
    height: 7,
    marginRight: 6,
  },
  iconDropDown2: {
    tintColor: Colors.RedOrange,
    transform: [{ rotate: '180deg' }],
  },
  leak: {
    backgroundColor: Colors.RedOrange,
  },
  textLeak: {
    color: Colors.Azure,
  },
  wrapLeadItem: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.RedOrange,
    borderRadius: 4,
    marginTop: 4,
  },
  wrapLeadItem2: {
    marginTop: 8,
  },
});
