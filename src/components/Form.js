import React from 'react'

class Form extends React.Component{

    render(){
        return(
            <div className="Form">
                <form onSubmit = {this.props.onSubmit}> 
                <input 
                value={this.props.inputValue}
                onChange = {this.props.handleChange}
                />
                </form>
            </div>
        )
    }
}

export default Form