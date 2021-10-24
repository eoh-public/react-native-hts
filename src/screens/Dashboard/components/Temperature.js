import styles from "../Styles/indexStyles";
import Text from "../../../commons/Text";
import {Colors} from "../../../configs";
import {t} from "i18n-js";
import {View} from "react-native";
import React from "react";

const STATUS = {}

const Temperature = ({device}) => {
  const isLeak = device.status === STATUS.LEAK;
  const isDisconnected = device.status === STATUS.DISCONECTED;
  const leakStyles = isLeak && styles.leak;
  const textLeakStyles = isLeak && styles.textLeak;
  const renderTimeDisConnect = () => {
  };
  return (
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
        {isDisconnected ? t('disconnected') : device.data.temp + ' ' + device.data.unit}
      </Text>
      {renderTimeDisConnect()}
    </View>
  )
}

export default Temperature;
