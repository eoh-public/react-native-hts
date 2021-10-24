import styles from "../Styles/indexStyles";
import Text from "../../../commons/Text";
import {Colors, Images} from "../../../configs";
import {t} from "i18n-js";
import {Image, View} from "react-native";
import React from "react";


const STATUS = {

}


const Electric = ({device}) => {
  const isLeak = device.status === STATUS.LEAK;
  const isDisconnected = device.status === STATUS.DISCONECTED;
  const leakStyles = isLeak && styles.leak;
  const textLeakStyles = isLeak && styles.textLeak;
  const renderTimeDisConnect = () => {
  };
  return (
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
              {device.data.total_consumption + ' kWh'}
            </Text>
            <View style={styles.row}>
              <Image
                resizeMode={'stretch'}
                source={Images.Dropdown}
                style={styles.iconDropDown}
              />
              <Text style={styles.desElectric}>
                {
                  device.data.diff_consumption_yesterday > 0
                    ? t('than_yesterday', {percent: device.data.diff_consumption_yesterday})
                    : t('less_yesterday', {percent: -device.data.diff_consumption_yesterday})
                }
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
              {device.data.total_consumption}
            </Text>
            <View style={styles.row}>
              <Image
                resizeMode={'stretch'}
                source={Images.Dropdown}
                style={[styles.iconDropDown, styles.iconDropDown2]}
              />
              <Text style={styles.desElectric}>
                {
                  device.data.diff_cost_yesterday > 0
                    ? t('than_yesterday', {percent: device.data.diff_cost_yesterday})
                    : t('less_yesterday', {percent: -device.data.diff_cost_yesterday})
                }
              </Text>
            </View>
          </View>
        </View>
      )}
      {renderTimeDisConnect()}
    </View>
  )
}

export default Electric;
