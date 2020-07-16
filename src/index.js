import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './assets/styles/index.css';
// import './assets/scss/mdb-pro.scss';  // requires installing node-sass, but this breaks the build
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App />, document.getElementById('root'));
registerServiceWorker();