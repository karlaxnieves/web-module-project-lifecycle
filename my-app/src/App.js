import React from 'react'
import axios from 'axios'
import Followers from './Followers'

class App extends React.Component {
state = {
  user: {},
  followers: {}
}

componentDidMount() {
  axios.get('https://api.github.com/users/karlaxnieves')
      .then(resp=> {
          this.setState({
              user: resp.data
          });
      })
      .catch(err => {
          console.log(err);
      });
}

  render() {
  return (
    <div className="App">
      <div className="container">
      <img className="avatar" src={this.state.user.avatar_url} alt="avatar"/>
      <h1>@{this.state.user.login}</h1>
      <h3>Location: {this.state.user.location}</h3>
      <h3>Following: {this.state.user.following}</h3>
      <h3>Followers: {this.state.user.followers}</h3>
      </div>
      <Followers data={this.state.user.followers_url}/>
    </div>
  );
}
}

export default App;
