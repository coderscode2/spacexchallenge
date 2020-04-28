import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import launchesActions from './launches.action';
import SpaceXLogo from '../../assets/spacex_logo_square.png';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {actions} = this.props;
    actions.getLaunches();
  }

  onRocketItemPress(data) {
    this.props.navigation.navigate('RocketDetails', {rocketDetails: data});
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.launches}
          renderItem={({item, index}) => {
            return (
              <Content>
                <List>
                  <ListItem
                    avatar
                    onPress={() => this.onRocketItemPress(item.rocket)}>
                    <Left>
                      {item && item.links && item.links.mission_patch ? (
                        <Thumbnail
                          source={{uri: item.links.mission_patch}}
                          style={styles.launchImage}
                        />
                      ) : (
                        <Thumbnail
                          source={SpaceXLogo}
                          style={styles.launchImage}
                        />
                      )}
                    </Left>
                    <Body>
                      <Text style={styles.missionName}>
                        {item.mission_name}
                      </Text>
                      <Text style={styles.launchDate}>
                        {item.launch_date_local
                          ? new Date(item.launch_date_local).toDateString()
                          : ''}
                      </Text>
                    </Body>
                    <Right>
                      {item.upcoming ? (
                        <Text
                          style={[styles.status, styles.upcomingStatus]}
                          note>
                          {'Upcoming'}
                        </Text>
                      ) : !item.launch_success ? (
                        <Text style={[styles.status, styles.failedStatus]}>
                          {'Failed'}
                        </Text>
                      ) : (
                        <Text style={[styles.status]}>{'Success'}</Text>
                      )}
                    </Right>
                  </ListItem>
                </List>
              </Content>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    launches: state.launches && state.launches.launches,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, launchesActions), dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launches);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  secondaryTitle: {
    fontSize: 14,
  },
  missionName: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  launchDate: {
    fontSize: 14,
    color: 'gray',
  },
  launchImage: {
    width: 56,
    height: 56,
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'green',
  },
  failedStatus: {
    color: 'red',
  },
  upcomingStatus: {
    color: 'blue',
  },
});
