import React from "react";

export default class FormTextInput extends React.Component {
    
    render(){
        return (
            <div>
                <div>Add your own advice</div>
                <form onSubmit={this.props._handleNewAdvice}>
                    <input />
                </form>
            </div>
        );
    }
}