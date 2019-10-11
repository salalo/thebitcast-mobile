import React, { Component } from 'react';
import styled from 'styled-components';
import CardList from '../../components/Card/CardList';
import { API } from 'aws-amplify';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { podcastData: [] };
  }
  async componentDidMount() {
    try {
      const data = await API.get('nameApi', '/name');
      this.setState({
        podcastData: data.DATA
      });
      console.log(this.state.podcastData);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Container>
        <CardList
          data={this.state.podcastData}
          navigation={this.props.navigation}
        />
      </Container>
    );
  }
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
`;
