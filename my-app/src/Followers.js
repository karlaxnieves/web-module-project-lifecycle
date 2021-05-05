import React from 'react'
import axios from 'axios'

class Followers extends React.Component {
    state = {
        followers: {}
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/karlaxnieves/followers')
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
            <div className="container">
                <h3>Followers List:</h3>
               {/* {this.state.followers.map((item) => {
                       return (<div key={item.id}>
                           <a href={item.html_url}>

                           </a>
                       </div>
                       )
                   })
               } */}
            </div>
        </div>
    )
}
}

export default Followers;