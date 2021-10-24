import styles from "../Styles/indexStyles";
import Text from "../../../commons/Text";
import {Colors} from "../../../configs";
import {t} from "i18n-js";
import {View} from "react-native";
import React from "react";

const STATUS = {};

const WaterFilter = ({device}) => {
  const data = device.data.water_filter_device;
  const isLeak = device.status === STATUS.LEAK;
  const isDisconnected = device.status === STATUS.DISCONECTED;
  const leakStyles = isLeak && styles.leak;
  const textLeakStyles = isLeak && styles.textLeak;
  const renderTimeDisConnect = () => {
  };
  return (
    <View style={styles.wrapTemp}>
      <Text type="Label" color={Colors.RobRoy}>
        {t('water_filter_system')}
      </Text>
      {isLeak ? (
        <View style={{marginBottom: 10}}>
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
              {t('tds_in')}
            </Text>
            <Text
              style={styles.humidityValue}
              type="H3"
              color={Colors.White}
              semibold
            >
              {data.tds_in + ' PPM'}
            </Text>
            <Text
              style={styles.humidityValue}
              type="H4"
              color={Colors.CornflowerBlu}
              semibold
            >
              {t('water_filter_status_' + data.in_status)}
            </Text>
          </View>
          <View style={[styles.wrapDes, styles.wrapDes3]}>
            <Text type="Label" color={Colors.RobRoy}>
              {t('tds_out')}
            </Text>
            <Text
              style={styles.humidityValue}
              type="H3"
              color={Colors.White}
              semibold
            >
              {data.tds_out + ' PPM'}
            </Text>
            <Text
              style={styles.humidityValue}
              type="H4"
              color={Colors.Mantis}
              semibold
            >
              {t('water_filter_status_' + data.out_status)}
            </Text>
          </View>
        </View>
      )}
    </View>
  )
}

export default WaterFilter;
