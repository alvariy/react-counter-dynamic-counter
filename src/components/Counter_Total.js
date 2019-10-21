import React from 'react';
import CounterGroup from '../CounterGroup/CounterGroup';

class Counter_Total extends React.Component{
constructor(props){
    super(props);
    this.state = {
        number:0
    };
}

render(){
    return(
            <div>
                <p>Total Count:</p>
                <p>{this.state.number}</p>
                <CounterGroup numberApi={this.state.number}/> 
            </div>

    );
}

}

export default Counter_Total;