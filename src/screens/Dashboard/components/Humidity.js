import styles from "../Styles/indexStyles";
import Text from "../../../commons/Text";
import {Colors} from "../../../configs";
import {t} from "i18n-js";
import {View} from "react-native";
import React from "react";

const STATUS = {}

const Humidity = ({device}) => {
  const data = device.data.humidity_device;
  const isLeak = device.status === STATUS.LEAK;
  const isDisconnected = device.status === STATUS.DISCONECTED;
  const leakStyles = isLeak && styles.leak;
  const textLeakStyles = isLeak && styles.textLeak;
  const renderTimeDisConnect = () => {
  };
  return (
    <View style={[styles.wrapTemp, leakStyles]}>
      <Text style={textLeakStyles} type="Label" color={Colors.RobRoy}>
        {t('humidity')}
      </Text>
      <Text
        style={styles.humidityValue}
        type="H3"
        color={Colors.White}
        semibold
      >
        {isDisconnected ? t('disConnected') : data.humidity + '%'}
      </Text>
      {renderTimeDisConnect()}
    </View>
  )
}

export default Humidity;
