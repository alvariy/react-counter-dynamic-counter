import React from 'react';

class Counter extends React.Component{
constructor(props){
    super(props);
    this.state = {number:0};
}

render(){
    return(
            <div>
                <button onClick={() => {this.setState(this.incrementNum)}}>+</button>
                <p>{this.state.number}</p>
                <button onClick={() => {this.setState(this.decrementNum)}}>-</button>
            </div>

    );
}

    incrementNum = () => {this.setState({number: this.state.number + 1})
                            this.props.onCounterValueChange(1)}
    decrementNum = () => {this.setState({number: this.state.number - 1})
                            this.props.onCounterValueChange(-1)}                        


}

export default Counter;