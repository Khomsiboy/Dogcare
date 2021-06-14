import React,{ Component } from 'react' 
import {Link} from 'react-router-dom'

class Register extends Component{


    constructor(props){
        super(props)
        this.state = {
            dogNames: []
        }
    }

    componentDidMount(){
        const url = "https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41";
        fetch(url)
        .then(data => data.json())
        .then(data => this.setState({dogNames: data.dogs}))
    }

    render() {
        const { dogNames } = this.state;
        
        return(
        <div>
        <div>
        <h1 >Doggy Daycare </h1>
        </div>
        <div >
        {dogNames.map((user) => (
        <Link key={user.chipNumber}>
        <img src={user.img} alt={`${user.name} img`}/>
        <div >
        <h5 >{user.name} </h5>
        <Link to={"/Dogs/"+user.chipNumber}>More about this friend</Link> 
        </div>
        </Link>
        
        ))}
        </div>
        </div>
    )
}

}








export default Register