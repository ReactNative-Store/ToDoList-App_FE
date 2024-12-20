import { TextStyle } from "react-native";

export const toastStyles = {
  successToast: {
    type: 'success',
    text1: 'Success',
    text2: 'Operation completed successfully.',
    visibilityTime: 4000,
    autoHide: true,
    position: 'top' as 'top', 
    topOffset: 70,
    text1Style: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#4CAF50',
    } as TextStyle,
    text2Style: {
      fontSize: 14,
      color: '#333',
    } as TextStyle,
  },

  errorToast: {
    type: 'error',
    text1: 'Error',
    text2: 'Something went wrong.',
    visibilityTime: 4000,
    autoHide: true,
    position: 'top' as 'top', 
    topOffset: 70,
    text1Style: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#f44336',
    } as TextStyle,
    text2Style: {
      fontSize: 14,
      color: '#333',
    } as TextStyle,
  },
  warningToast: {
    type: 'warning',
    text1: 'Warning',
    text2: 'Please check again.',
    visibilityTime: 4000,
    autoHide: true,
    position: 'top' as 'top', 
    topOffset: 70,
    text1Style: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFC107',
    } as TextStyle,
    text2Style: {
      fontSize: 14,
      color: '#333',
    } as TextStyle,
  },
};
