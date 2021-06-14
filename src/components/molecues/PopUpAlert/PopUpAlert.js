import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'providers/GlobalContextProvider';
import { PopUpAlertWrapper, Alert } from './PopUpAlert.style';

const PopUpAlert = ({ message, isVisible }) => {
  const { height } = useContext(GlobalContext);
  return (
    <PopUpAlertWrapper height={height} isVisible={isVisible}>
      <Alert isVisible={isVisible}>{message}</Alert>
    </PopUpAlertWrapper>
  );
};

export default PopUpAlert;

PopUpAlert.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
