import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
state = {
  users: []
}

componentDidMount(){
axios.get('https://api.github.com/users/karlaxnieves')
.then(res =>{
  this.setState({
    users:Response.data
  })
})
.catch(err =>{
  console.log(err)
})
}

  render (){
  return (
    <div className="App">
      <h1>GitHub</h1>

    </div>
  );
}
}

export default App;
