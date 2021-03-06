import {
  isObjectEmpty,
  setAxiosDefaultAuthToken,
  setAxiosDefaultLanguage,
  formatMoney,
  insertToString,
  removeFromString,
  timeInRange,
  ToastBottomHelper,
} from '../Utils';
import axios from 'axios';
import moment from 'moment';
import Toast from 'react-native-toast-message';

test('test isObjectEmpty', () => {
  expect(isObjectEmpty('text')).toEqual(false);
});

test('test setAxiosDefaultAuthToken', () => {
  setAxiosDefaultAuthToken('_token');
  expect(axios.defaults.headers.common.Authorization).toEqual('Token _token');
});

test('test setAxiosDefaultLanguage', () => {
  setAxiosDefaultLanguage('LANG');
  expect(axios.defaults.headers.common['Accept-Language']).toEqual('LANG');
});

test('test setAxiosDefaultLanguage withoout params', () => {
  setAxiosDefaultLanguage();
  expect(axios.defaults.headers.common['Accept-Language']).toEqual('vi');
});

test('format money', () => {
  expect(formatMoney(1000)).toBe('1.000 VND');
});

test('insert too string', () => {
  expect(insertToString('abc', 1, 'a')).toBe('aabc');
});

test('removeFromString', () => {
  expect(removeFromString('abc', 1)).toBe('ac');
});

test('timeInRange', () => {
  // start <= end
  let start = moment('2021-08-27T02:00:00.000Z');
  let end = moment('2021-08-27T08:00:00.000Z');
  let time = moment('2021-08-27T07:00:00.000Z');
  expect(timeInRange(start, end, time)).toBe(true);

  time = moment('2021-08-27T010:00:00.000Z');
  expect(timeInRange(start, end, time)).toBe(false);

  // start > end
  start = moment('2021-08-27T08:00:00.000Z');
  end = moment('2021-08-27T02:00:00.000Z');
  time = moment('2021-08-27T10:00:00.000Z');
  expect(timeInRange(start, end, time)).toBe(true);

  time = moment('2021-08-27T007:00:00.000Z');
  expect(timeInRange(start, end, time)).toBe(false);
});

const mockToastShow = jest.fn();
jest.mock('react-native-toast-message');
Toast.show = mockToastShow;
test('ToastBottomHelper case !Toast._ref true', () => {
  Toast._ref = null;

  ToastBottomHelper.success('message');
  expect(mockToastShow).not.toBeCalled();

  ToastBottomHelper.error('message');
  expect(mockToastShow).not.toBeCalled();
});

test('ToastBottomHelper success', () => {
  Toast._ref = { current: {} };
  ToastBottomHelper.success('message');
  expect(mockToastShow).toBeCalledWith({
    type: 'success',
    position: 'bottom',
    text1: 'message',
    visibilityTime: 1000,
  });
});
