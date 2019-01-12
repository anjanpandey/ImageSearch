import React from 'react';


class SearchBar extends React.Component {
    // any time users type something, we call this function - uncontrolled
    //onInputChange(event) {
        // store the users input
       // event.target.value;
    //}
    // intialize a state called term - controlled
    state = {term:''};
    // this function keep browser from refreshing the entire page onsubmit
    // never automatically submit itself
    // arrow function automatically handles issue with this.state because
    // this is binded to the initial state
    // same as constructor() { this.state = this.state.bind(this);}
    onFormSubmit = event => {
        event.preventDefault();
        // in class based component, access props as this.props
        this.props.onSubmit(this.state.term);
    }
    // or <form onSubmit={(event) => this.onFormSubmit(event)}
    render() {
        return (  
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={event => this.setState({term: event.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}



export default SearchBar;