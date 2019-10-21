import React from 'react';

class InputNumbers extends React.Component{
    
constructor(props){
    super(props);
    this.state = {number:0};
}

handleSubmit = (event) => {
    this.setState({number: event.target.value});
}

render(){

    return(
        <div>
                <textarea id = "noice" name="text-area" value = {this.state.number} onChange={this.handleSubmit}>0</textarea>
                <button onClick={() => {this.setState({number: this.state.number})}}>Regenerate Counters</button>
            </div>
    );
}

}

export default InputNumbers;