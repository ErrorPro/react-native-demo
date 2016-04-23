import { createStore, combineReducers } from 'redux';
// import * as reducers from './reducers';
import reducers from './reducers/candidates';

const mock = {
  candidates: [
    {
      id: '1',
      name: 'Rico',
      secondName: 'Edwards',
      votes: 22,
      image: 'https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.0-9/12002806_10207731325900135_5740529345239099355_n.jpg?oh=01e52a55e6921925c4399263733a3e2d&oe=57BDD860',
    },
    {
      id: '2',
      name: 'Ven',
      secondName: 'Korolev',
      votes: 122000,
      image: 'https://scontent.fbkk6-1.fna.fbcdn.net/hprofile-xlt1/v/t1.0-1/p320x320/12806065_969725369743270_7367216479276977182_n.jpg?oh=552b4da1c8ead8e0f75a1773950d61a3&oe=57B18C31',
    }
  ]
}

const createStoreNew = () => createStore(combineReducers({candidates: reducers}), mock);

export default createStoreNew;
