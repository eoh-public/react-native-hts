import React, { memo, useRef } from 'react';
import { Icon } from '@ant-design/react-native';
import { View, TouchableOpacity } from 'react-native';

import styles from './NavBarStyles';
import { usePopover } from '../../hooks/Common';
import { Colors } from '../../configs';
import HorizontalScroll from '../../commons/HorizontalScroll';
import MenuActionMore from '../MenuActionMore';

const NavBar = memo(
  ({ listMenuItem, listStation, onSnapToItem, indexStation, style }) => {
    const { childRef, showingPopover, showPopoverWithRef, hidePopover } =
      usePopover();
    const refMenuAction = useRef();
    const handleShowMenuAction = () => showPopoverWithRef(refMenuAction);

    return (
      <>
        <View style={[styles.wrap, style]}>
          <View style={styles.wrapTitle}>
            <HorizontalScroll
              listStation={listStation}
              onSnapToItem={onSnapToItem}
              indexStation={indexStation}
            />
          </View>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={handleShowMenuAction}
            ref={refMenuAction}
          >
            <Icon name={'bars'} size={19} color={Colors.Black} />
          </TouchableOpacity>
        </View>
        <MenuActionMore
          isVisible={showingPopover}
          hideMore={hidePopover}
          listMenuItem={listMenuItem}
          childRef={childRef}
          onItemClick={onSnapToItem}
          isTextCenter={false}
          wrapStyle={styles.wrapStyle}
        />
      </>
    );
  }
);
export default NavBar;
