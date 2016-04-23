import React, {
  AppRegistry,
  Component,
} from 'react-native';
import App from './app/index';

class TD extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('TD', () => TD);
