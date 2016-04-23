import React, {Component, ListView} from 'react-native';
import { connect } from 'react-redux';
import {compose} from 'redux';
import ListCandidates from './ListCandidates';
import { vote } from '../actions/candidates';

export default compose(
  connect(
    (state) => ({
      candidates: state.candidates
    }),
    (dispatch) => ({
      onVoteCandidat: (id, type) => dispatch(vote({id, type}))
    }),
    (stateProps, dispatchProps, parentProps) => ({
      ...dispatchProps,
      candidates: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(stateProps.candidates),
    })
  )
)(ListCandidates);
