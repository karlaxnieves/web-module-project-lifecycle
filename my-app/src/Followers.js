import React from 'react'
import axios from 'axios'
import './App.css'

class Followers extends React.Component {
    state = {
        followers: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/karlaxnieves/followers')
            .then(res=> {
                this.setState({
                    followers: res.data,
                });
            })
            .catch(err => {
                console.log(err);
            });
      }
      
render(){
    const {followers} = this.state
    if(followers.length == 0) return <p>Loading Followers..</p>
    return (<div>
           {followers.map(follower => (
               <div key={follower.id} className="container">
                   <img className="followers-img " src={follower.avatar_url} alt={follower.login} />
                   <h4>{follower.login}</h4>
               </div>
           ))}
        </div>)
}
}

export default Followers;