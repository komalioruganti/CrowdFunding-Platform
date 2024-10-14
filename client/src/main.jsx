import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { ChainId,ThirdwebProvider } from '@thirdweb-dev/react';
import './index.css';
import { StateContextProvider } from './context';

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
    <Router>
    <StateContextProvider>
    <App/>
    </StateContextProvider> 
    </Router>
    </ThirdwebProvider>
)
