import React, { memo } from 'react';
import GasLeak from "./GasLeak";
import Humidity from "./Humidity";
import Temperature from "./Temperature";
import Electric from "./Electric";
import WaterFilter from "./WaterFilter";
import styles from "@eohjsc/react-native-hts/src/screens/Dashboard/Styles/indexStyles";
import {t} from "i18n-js";
import Text from "@eohjsc/react-native-hts/src/commons/Text";


const Device = memo(({device}) => {
  console.log('device', device)
  switch (device.type) {
    case 'gas_leak':
      return <GasLeak device={device}/>
    case 'humidity':
      return <Humidity device={device}/>
    case 'temperature':
      return <Temperature device={device}/>
    case 'electric':
      return <Electric device={device}/>
    case 'water_filter':
      return <WaterFilter device={device}/>
    default:
      return (
        <Text>
          {t('unknown device with id')}
        </Text>
      )
  }
});

export default Device;
