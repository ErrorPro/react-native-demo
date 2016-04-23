import React, {Component} from 'react-native';
import { Provider } from 'react-redux';
import createStore from './createStore';
import { ListCandidatesContainer } from './components/ListCandidates';

const App = () => {
  return (
    <Provider store={createStore()}>
      <ListCandidatesContainer />
    </Provider>
  )
}

export default App;
