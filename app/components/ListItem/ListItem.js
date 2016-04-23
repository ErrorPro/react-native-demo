import React, {
  Component,
  PropTypes,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  candidate: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50
  },
  button: {
    padding: 10,
    width: 240,
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 5
  }
});

export default class ListItem extends Component {
  static propTypes = {
    candidate: PropTypes.object,
    onPress: PropTypes.func,
  }

  render() {
    const { onPress, candidate: {id, name, secondName, votes, image} } = this.props;

    return (
      <View style={styles.candidate}>
        <Image source={{uri: image}} style={styles.image} />
        <Text>id: {id}</Text>
        <Text>name: {name}</Text>
        <Text>second name: {secondName}</Text>
        <Text>votes: {votes}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Vote</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
