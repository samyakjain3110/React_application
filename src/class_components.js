import React , {Component} from 'react'

class CC extends Component{
    render(){
        // inside return add all your html code
        return(
        <div>
            <h1> This is class component </h1>
            <h1> Received name for  class component is {this.props.name} </h1>
        </div>
        )
    }
}

// export the class components
export default CC 