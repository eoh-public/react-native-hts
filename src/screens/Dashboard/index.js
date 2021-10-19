import { Colors, Images } from '@eohjsc/react-native-hts/src/configs';
import moment from 'moment';
import React, { useContext, useState, useCallback, useMemo } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Text from '../../commons/Text';
import { t } from 'i18n-js';

import styles from './Styles/indexStyles';
import { HTSContext } from '@eohjsc/react-native-hts/src/context';
import NavBar from '@eohjsc/react-native-hts/src/commons/NavBar';

const STATUS = {
  NO_LEAK: 'NO_LEAK',
  LEAK: 'LEAK',
  DISCONECTED: 'DISCONECTED',
};

const Dashboard = () => {
  const { setAction } = useContext(HTSContext);
  const data = useMemo(
    () => [
      { text: 'Kitchen' },
      { text: 'Kitchen2' },
      { text: 'Kitchen3' },
      { text: 'Kitchen4' },
    ],
    []
  );
  const [listStation, setListStation] = useState(data);
  const [listMenuItem, setListMenuItem] = useState(data);
  const [indexStation, setIndexStation] = useState(0);
  const [status, setStatus] = useState(STATUS.NO_LEAK);

  const onExittApp = () => {
    setAction('EXIT_APP', true);
  };

  const onSnapToItem = useCallback(
    (item, index) => {
      setIndexStation(index);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [indexStation]
  );

  const onChangeStatus = useCallback(() => {
    setStatus(STATUS.DISCONECTED);
  }, [status]);

  const renderContent = useMemo(() => {
    const isLeak = status === STATUS.LEAK;
    const isDisconnected = status === STATUS.DISCONECTED;
    const leakStyles = isLeak && styles.leak;
    const textLeakStyles = isLeak && styles.textLeak;

    const renderTimeDisConnect = () =>
      isDisconnected && (
        <Text style={styles.desElectric}>
          {moment().format('HH:mm DD/MM/YYYY')}
        </Text>
      );

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.topContent}>
          <View style={[styles.wrapDes, leakStyles]}>
            <Text style={textLeakStyles} type="Label" color={Colors.RobRoy}>
              {t('gas_leak_detection')}
            </Text>
            <Text
              style={styles.humidityValue}
              type="H3"
              color={Colors.White}
              semibold
            >
              {isLeak
                ? '15:04:32'
                : t(isDisconnected ? 'disConnected' : 'no_leak')}
            </Text>
            {renderTimeDisConnect()}
          </View>
          <View style={[styles.wrapDes, styles.wraphumidity, leakStyles]}>
            <Text style={textLeakStyles} type="Label" color={Colors.RobRoy}>
              {t('humidity')}
            </Text>
            <Text
              style={styles.humidityValue}
              type="H3"
              color={Colors.White}
              semibold
            >
              {isDisconnected ? t('disConnected') : '57%'}
            </Text>
            {renderTimeDisConnect()}
          </View>
        </View>
        <View style={[styles.wrapTemp, leakStyles]}>
          <Text style={textLeakStyles} type="Label" color={Colors.RobRoy}>
            {t(
              isLeak
                ? 'freezer_temperature_is_out_of_range'
                : 'freezer_temperature'
            )}
          </Text>
          <Text
            style={styles.humidityValue}
            type="H3"
            color={Colors.White}
            semibold
          >
            {isDisconnected ? t('disconnected') : '2 °C'}
          </Text>
          {renderTimeDisConnect()}
        </View>
        <View style={styles.wrapTemp}>
          <Text type="Label" color={Colors.RobRoy}>
            {t('water_filter_system')}
          </Text>
          {isLeak ? (
            <View style={{ marginBottom: 10 }}>
              <View style={[styles.wrapLeadItem]}>
                <Text
                  style={styles.humidityValue}
                  type="H4"
                  color={Colors.White}
                  semibold
                >
                  {'Filter 2'}
                </Text>
                <Text style={textLeakStyles} type="Label">
                  {t('replace_now')}
                </Text>
              </View>
              <View style={[styles.wrapLeadItem, styles.wrapLeadItem2]}>
                <Text
                  style={styles.humidityValue}
                  type="H4"
                  color={Colors.White}
                  semibold
                >
                  {'Filter 3'}
                </Text>
                <Text style={textLeakStyles} type="Label">
                  {t('replace_now')}
                </Text>
              </View>
            </View>
          ) : (
            <Text
              style={styles.humidityValue}
              type="H4"
              color={Colors.White}
              semibold
            >
              {t(isDisconnected ? 'disConnected' : 'tank_is_working_normally')}
            </Text>
          )}

          {isDisconnected ? (
            renderTimeDisConnect()
          ) : (
            <View style={styles.row}>
              <View style={[styles.wrapDes, styles.wrapDes2]}>
                <Text type="Label" color={Colors.RobRoy}>
                  {t('freezer_temperature')}
                </Text>
                <Text
                  style={styles.humidityValue}
                  type="H3"
                  color={Colors.White}
                  semibold
                >
                  {'103 PPM'}
                </Text>
                <Text
                  style={styles.humidityValue}
                  type="H4"
                  color={Colors.CornflowerBlu}
                  semibold
                >
                  {t('safe')}
                </Text>
              </View>
              <View style={[styles.wrapDes, styles.wrapDes3]}>
                <Text type="Label" color={Colors.RobRoy}>
                  {t('freezer_temperature')}
                </Text>
                <Text
                  style={styles.humidityValue}
                  type="H3"
                  color={Colors.White}
                  semibold
                >
                  {'8 PPM'}
                </Text>
                <Text
                  style={styles.humidityValue}
                  type="H4"
                  color={Colors.Mantis}
                  semibold
                >
                  {t('pure')}
                </Text>
              </View>
            </View>
          )}
        </View>
        <View style={styles.wrapTemp}>
          <Text type="Label" color={Colors.RobRoy}>
            {t('electricity')}
          </Text>
          {isDisconnected ? (
            <Text
              style={styles.humidityValue}
              type="H3"
              color={Colors.White}
              semibold
            >
              {t('disconnected')}
            </Text>
          ) : (
            <View style={styles.row}>
              <View style={[styles.wrapDes, styles.wrapDes2]}>
                <Text type="Label" color={Colors.RobRoy}>
                  {t('total_consumption')}
                </Text>
                <Text
                  style={styles.humidityValue}
                  type="H3"
                  color={Colors.White}
                  semibold
                >
                  {'4.2 kWh'}
                </Text>
                <View style={styles.row}>
                  <Image
                    resizeMode={'stretch'}
                    source={Images.Dropdown}
                    style={styles.iconDropDown}
                  />
                  <Text style={styles.desElectric}>
                    {t('than_yesterday', { percent: 12 })}
                  </Text>
                </View>
              </View>
              <View style={[styles.wrapDes, styles.wrapDes3]}>
                <Text type="Label" color={Colors.RobRoy}>
                  {t('cost_of_use')}
                </Text>
                <Text
                  style={styles.humidityValue}
                  type="H3"
                  color={Colors.White}
                  semibold
                >
                  {'21,000 VND'}
                </Text>
                <View style={styles.row}>
                  <Image
                    resizeMode={'stretch'}
                    source={Images.Dropdown}
                    style={[styles.iconDropDown, styles.iconDropDown2]}
                  />
                  <Text style={styles.desElectric}>
                    {t('than_yesterday', { percent: 0.01 })}
                  </Text>
                </View>
              </View>
            </View>
          )}
          {renderTimeDisConnect()}
        </View>
      </ScrollView>
    );
  }, [status]);

  return (
    <View style={styles.wrap}>
      <View style={styles.header}>
        <Text onPress={onChangeStatus} type="H4" color={Colors.RobRoy} semibold>
          {moment().format('LL')}
        </Text>
        <View style={styles.rightHeader}>
          <TouchableOpacity style={styles.commonButton}>
            <Image source={Images.Reload} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.commonButton}>
            <Image source={Images.Add} />
          </TouchableOpacity>
        </View>
      </View>
      <Text onPress={onExittApp} style={styles.textDashboard}>
        {t('dashboard')}
      </Text>
      <View style={styles.navbar}>
        <NavBar
          listStation={listStation}
          listMenuItem={listMenuItem}
          onSnapToItem={onSnapToItem}
          indexStation={indexStation}
        />
      </View>
      {renderContent}
    </View>
  );
};

export default Dashboard;
