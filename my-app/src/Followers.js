import React from 'react'
import axios from 'axios'
import './App.css'

class Followers extends React.Component {
    state = {
        followers: []
    }

    componentDidMount() {
        axios.get(this.props.data)
            .then(res=> {
                this.setState({
                    followers: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
      }
      
render(){
    return (
        <div>
            <h3 className="followers-list">Followers List:</h3>
            <div className="container">

               {this.state.followers.map(item => {

                   const name = item.login.toUpperCase();


                       return (<div key={item.id}>
                           <img className="followers-img" src={item.avatar_url} alt='avatarurl'/>
                           <a href={item.html_url}>
                               <h3>{`@${name}`}</h3>
                               </a> 
                       </div>
                       )
                   })
               }
            </div>
        </div>
    )
}
}

export default Followers;