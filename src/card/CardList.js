import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import Card from './Card';
import { fetchPodcastCardInfo } from './CardActions';
import Loading from '../app/Loading';

class CardList extends Component {
  async componentDidMount() {
    this.props.dispatch(fetchPodcastCardInfo());
  }

  render() {
    const { error, loading, podcast_info } = this.props;

    const DATA = [
      {
        id: '9'
      },
      {
        id: '8'
      },
      {
        id: '7'
      },
      {
        id: '6'
      },
      {
        id: '5'
      },
      {
        id: '4'
      },
      {
        id: '3'
      },
      {
        id: '2'
      },
      {
        id: '1'
      },
      {
        id: '0'
      }
    ];

    if (error) return <Text>Error, {error.message}</Text>;
    if (loading) return <Loading />;

    return (
      <FlatList
        style={{
          zIndex: -2
        }}
        data={DATA}
        renderItem={({ item }) => (
          <Card navigation={this.props.navigation} podcastInfo={podcast_info} />
        )}
        keyExtractor={item => item.id}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    podcast_info: state.cardReducer.items,
    loading: state.cardReducer.loading,
    error: state.cardReducer.error
  };
};

export default connect(mapStateToProps)(CardList);
