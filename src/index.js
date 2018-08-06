import React from 'react';
import { render } from 'react-dom';
import { Provider as FelaProvider } from 'react-fela';
import { createRenderer } from 'fela';
import extend from 'fela-plugin-extend';

// Root Container
import App from './container/app/';

const renderer = createRenderer({
    plugins: [extend()],
});

render(
    <FelaProvider renderer={renderer}>
        <App />
    </FelaProvider>,
    document.getElementById('root')
);
