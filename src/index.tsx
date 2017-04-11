import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { App } from './components/App';


function renderApp() {
    render(
        <AppContainer>
            <App compiler="TypeScript" framework="React"/>
        </AppContainer>,
        document.querySelector('#root')
    );
}


if (module.hot) {
    module.hot.accept();
    renderApp();
}
else {
    renderApp();
}