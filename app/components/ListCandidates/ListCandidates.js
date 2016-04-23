import React, {Component, PropTypes, ListView, StyleSheet} from 'react-native';
import { ListItem } from '../ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class ListCandidates extends Component {
  static propTypes = {
    candidates: PropTypes.array,
    onVoteCandidat: PropTypes.func,
  }

  render() {
    return (
      <ListView
        dataSource={this.props.candidates}
        renderRow={(candidate) => (
          <ListItem
            key={candidate.id}
            candidate={candidate}
            onPress={() => this.props.onVoteCandidat(candidate.id)}/>
          )
        }
      />
    )
  }
}
