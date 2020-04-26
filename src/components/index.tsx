// react start point
import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    return <div>Test</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app") as HTMLElement);
