import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './my-presentation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Presentation />, document.getElementById('root'));
registerServiceWorker();
