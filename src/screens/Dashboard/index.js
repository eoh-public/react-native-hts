import { Colors, Images } from '../../configs';
import moment from 'moment';
import React, {useContext, useState, useCallback, useMemo, useEffect} from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Text from '../../commons/Text';
import { t } from 'i18n-js';
import Device from './components/Device'

import styles from './Styles/indexStyles';
import { HTSContext } from '../../context';
import NavBar from '../../commons/NavBar';
import {axiosGet} from "../../utils/Apis/axios";

const Dashboard = () => {
  const { setAction } = useContext(HTSContext);
  const [unit, setUnit] = useState({});
  const listStation = useMemo(() => {
    if (!unit.stations) {
      return [];
    }
    return unit.stations;
  }, [unit])
  const listMenuItem = useMemo(() => {
    if (!unit.stations) {
      return [];
    }
    return unit.stations.map((v) => ({text: v.name}));
  }, [unit]);
  const [indexStation, setIndexStation] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
      const {data, success} = await axiosGet('http://10.0.2.2:8000/api/hts/units/');
      console.log('unit', data[0]);
      setUnit(data[0]);  // todo select unit
  }, []);

  const reload = useCallback(() => {
    fetchData();
  }, []);

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
    //setStatus(STATUS.DISCONECTED);
  }, []);

  console.log(listStation[indexStation] && listStation[indexStation].devices);

  const renderContent = useMemo(() => {
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
        {
          !!listStation[indexStation] && !!listStation[indexStation].devices && listStation[indexStation].devices.map((device) => {
            return (
              <Device device={device} key={device.id.toString()} />
            )
          })
        }
      </ScrollView>
    );
  }, [indexStation, unit]);

  return (
    <View style={styles.wrap}>
      <View style={styles.header}>
        <Text onPress={onChangeStatus} type="H4" color={Colors.RobRoy} semibold>
          {moment().format('LL')}
        </Text>
        <View style={styles.rightHeader}>
          <TouchableOpacity style={styles.commonButton} onPress={reload}>
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
