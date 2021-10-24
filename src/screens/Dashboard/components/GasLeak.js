import styles from "../Styles/indexStyles";
import Text from "../../../commons/Text";
import {Colors} from "../../../configs";
import {t} from "i18n-js";
import {View} from "react-native";
import React from "react";
import moment from 'moment';


const STATUS = {
  NO_LEAK: 'NO_LEAK',
  LEAK: 'LEAK',
  DISCONECTED: 'DISCONECTED',
};

 const showTimeLeak = (time) => {
   const diff = moment.duration(moment().diff(moment(time)))
   const timestr = [
     diff.hours() < 10 ? '0' + diff.hours() : diff.hours(),
     diff.minutes() < 10 ? '0' + diff.minutes() : diff.minutes(),
     diff.seconds() < 10 ? '0' + diff.seconds() : diff.seconds(),
   ].join(':');
   if (diff.asDays() > 1) {
     return parseInt(diff.asDays()) + 'day(s) ' + timestr;
   }
   return timestr;
 }


const GasLeak = ({device}) => {
  const isLeak = device.status === STATUS.LEAK;
  const isDisconnected = device.status === STATUS.DISCONECTED;
  const leakStyles = isLeak && styles.leak;
  const textLeakStyles = isLeak && styles.textLeak;
  const renderTimeDisConnect = () => {
  };
  return (
    <View style={[styles.wrapTemp, leakStyles]}>
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
          ? showTimeLeak(device.data.from)
          : t(isDisconnected ? 'disConnected' : 'no_leak')}
      </Text>
      {renderTimeDisConnect()}
    </View>
  )
}

export default GasLeak;
