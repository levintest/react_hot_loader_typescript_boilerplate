import * as React from 'react';


export interface IAppProps { compiler: string, framework: string }
export interface IAppStates { counter: number }

export class App extends React.Component<IAppProps, IAppStates> {
    state = {
        counter: 0
    };

    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <button onClick={this.increase}>INCREASE</button>
                <br/><span>COUNTER: { this.state.counter }</span>
            </div>
        );
    }
}