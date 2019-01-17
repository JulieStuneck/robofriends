import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';//if no . after name, assumes is a js file
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById(‘root’));

registerServiceWorker();
