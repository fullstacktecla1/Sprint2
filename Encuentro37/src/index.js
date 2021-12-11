import React from 'react';
import ReactDOM from 'react-dom';
import PrimerComponente from './PrimerComponente'
import 'bootstrap/dist/css/bootstrap.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <PrimerComponente value="10"/>  , divRoot );
