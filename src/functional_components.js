import React from 'react'

function FC(props){
    return(
        <div>
            <h1>This is from functional component </h1>
            <h1>Received name for functional componen {props.name} </h1>
        </div>
    )
}

export default FC;