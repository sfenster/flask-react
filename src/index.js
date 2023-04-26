import React from 'react';
import ReactDOM from 'react-dom/client';

// CHOOSE ONE:
// USE THE FOLLOWING TWO IMPORTS FOR BOOTSTRAP W/O SASS
// CODE IN ./INDEX.CSS WILL OVERRISE AND CUSTOMIZE BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// OR...
// USE THE FOLLOWING IMPORT FOR BOOTSTRAL WITH SASS
//import './index.scss';

class HelloMessage extends React.Component {
    render() {
        return <div>Hello from Python/React, using Babel, Bootstrap and Webpack</div>;
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelloMessage />
);