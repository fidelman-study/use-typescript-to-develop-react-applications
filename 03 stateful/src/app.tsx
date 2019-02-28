import * as React from 'react';
import * as ReactDOM from 'react-dom';

type Props = {
  message: string,
}

type State = {
  count: number,
}

class App extends React.Component<Props, State> {
  state = {
    count: 0
  }

  render() {
    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.props.message} {this.state.count}</button>
  }
}

ReactDOM.render(
  <App message="Hi" />,
  document.getElementById('root')
)