import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';

import {UIActivityIndicator} from 'react-native-indicators';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

const LoadingComponent = () => (
  <View
    style={{
      ...commonStyles.loader,
      backgroundColor: 'rgba(0,0,0,0.2)',
      elevation: 5,
    }}>
    <UIActivityIndicator size={40} color={colors.darkBlue} />
  </View>
);
const Loader = ({isLoading = false, withModal}) => {
  if (withModal) {
    return (
      <Modal transparent visible={isLoading}>
        <LoadingComponent />
      </Modal>
    );
  }
  if (isLoading) {
    return <LoadingComponent />;
  }
  return null;
};

export default Loader;
