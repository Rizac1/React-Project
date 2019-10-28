import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
// This is where most of everything is being called from
        this.state = {
            placeholder: 'lul',
            text: this.props.string,
            hasLoaded: false
        }
    }
// This is where it is saying that the app is mounted and setting it to True !this.state.hasLoaded reverses the hasLoaded state
    componentDidMount() {
        this.setState({ hasLoaded: !this.state.hasLoaded });
    }
// This is making it to where whatever is placed inside the placeholder updates the text within the text property
    handleEvent(e) {
        this.setState({ text: e.target.value });
    }
// This is doing the samething as the componentDidMount except we can toggle this one and set it where we want it
    toggleLoaded() {
        this.setState({ hasLoaded: !this.state.hasLoaded });
    }
// This is rendering what we want it to display on the DOM
    render() {
        { // This is a conditional statement saying that if it false just render the button with the toggle function
            if (this.state.hasLoaded) {
                return (
                    <>
                        <button type="button" onClick={() => this.toggleLoaded()}>Toggle hasLoaded's state</button>
                    </>
                )
            } else { // This is stating that once the toggle button is clicked to render the placeholder and a button to toggle it back to false
                return (
                    <>
                        <h1>{this.state.text}</h1>
                        <input type="text" value={this.state.text} placeholder={this.state.placeholder} onChange={(params) => this.handleEvent(params)} />
                        <button type="button" onClick={() => this.toggleLoaded()}>Click Me</button>
                    </>
                )
            }
        }
    }
}
// This is exporting everything that is inside the App component to where ever we import App
export default App
