import React from 'react'
import axios from 'axios'

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
          console.log(resp.data)
      })
      .catch(err => {
          console.log(err);
      });
}

  render() {
  return (
    <div className="App">
      <h1>{this.state.user.login}</h1>
    </div>
  );
}
}

export default App;
