import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
state = {
  user: {},
  followers: ''
}

componentDidMount(){
axios.get('https://api.github.com/users/karlaxnieves')
.then(res =>{
  this.setState({
    user:res.data
  })
})
.catch(err =>{
  console.log(err)
})
}

handleChange = (e)=> {
  this.setState({
      followers: e.target.value
  });
}

handleSubmit = (e) =>{
  e.preventDefault();

  axios.get(`https://api.github.com/users/karlaxnieves/${this.state.followers}`)
  .then(res =>{
    this.setState({
      followers: res.data
    })
  })
  .catch(err=> {
    console.log(err);
})
}


  render (){
  return (
    <div className="App">
      <h1>GitHub Users</h1>
<form onSubmit={this.handleSubmit}>
<input value={this.state.followers} onChange={this.handleChange}/>
<button>Fetch Followers</button>
</form>


      <div className="container">
      <img className="avatar" src={this.state.user.avatar_url} alt="avatar"/>
      <h3>@{this.state.user.login}</h3>
      <h3>Location: {this.state.user.location}</h3>
      <h3>Following: {this.state.user.following}</h3>
      <h3>Followers: {this.state.user.followers}</h3>
      </div>
     
    </div>
  );
}
}

export default App;
