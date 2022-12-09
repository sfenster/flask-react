import React from 'react';
import ReactDOM from 'react-dom';

class Whatever extends React.Component {
    render() {
        return <div>Hello from React, with Webpack!</div>;
    }
}
export default Whatever;

ReactDOM.render(<Whatever />, document.getElementById("root"));