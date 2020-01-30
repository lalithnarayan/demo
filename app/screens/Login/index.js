import React from 'react';

import styles from './styles';
import { WebView } from 'react-native-webview';

export default function Login() {

  return (
    <WebView style={styles.container}source={{ uri: 'https://xd.adobe.com/view/43d296be-ff0b-4388-48ae-686bb98a6c37-35e3/?fullscreen' }} />
  );
}
