import React, { Component } from 'react';
import Spinner from './components/Spinner';
import Header from './components/Header';
import Candidates from './components/Candidates';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
      previousVotes: [],
      previousPercentage: [],
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch('http://192.168.0.40:8080/votes')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const previousVotes = this.state.candidates.map(({ id, votes }) => {
            return { id, votes };
          });
          const previousPercentages = this.state.candidates.map(
            ({ id, percentage }) => {
              return { id, percentage };
            }
          );
          this.setState({
            candidates: json.candidates,
            previousVotes,
            previousPercentages,
          });
        });
    }, 1000);
  }

  render() {
    const { candidates, previousVotes, previousPercentages } = this.state;
    if (candidates.length === 0) {
      return <Spinner />;
    } else {
      return (
        <div className="container">
          <Header> Votação</Header>
          <div className="row">
            <div className="col s1"></div>
            <div className="col s12">
              <Candidates
                previousPercentages={previousPercentages}
                previousVotes={previousVotes}
                candidates={candidates}
              />
            </div>
            <div className="col s1"></div>
          </div>
        </div>
      );
    }
  }
}
