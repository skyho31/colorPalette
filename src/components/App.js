import React, { Component } from 'react';
import '../css/App.css';
import ColorPalette from './ColorPalette';

class App extends Component {

    render() {
        return (
            <div>
                <header>
                    <h1>COLOR PALETTE</h1>
                </header>
                <ColorPalette />
            </div>
        );
    }
}

export default App;
