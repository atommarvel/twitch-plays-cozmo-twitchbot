// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
          <h1> COZMO TWITCHBOT </h1>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render( <App/> ,
    document.getElementById('content')
);
