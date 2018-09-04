
import csshook from 'css-modules-require-hook/preset';
import assethook from 'asset-require-hook';
assethook({
    extensions: ['png', 'jpg','svg']
});


import express from 'express';

var path = require('path');
import App from "./src/App";

import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter, Link } from "react-router-dom";
import Routers from "./src/Route";
import fetch from "isomorphic-fetch";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducers from "./src/reducers";

import { match, RouterContext } from 'react-router'

let app = express();

app.use(express.static(path.join(__dirname, '/build/static')));

app.get('*', async (req, res) => {
    
    const data = await fetch('https://api.github.com/repos/jasonboy/wechat-jssdk/branches')
        .then(res => res.json())

    const context = {}

    const store = createStore(appReducers, {num:100})

    // match({ routes: Routers, location: req.url }, (error, redirectLocation, renderProps) => {
    //     _renderProps = renderProps
    // })
    const htmlString = renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}>

                <Routers />

            </StaticRouter>
            {/* <RouterContext {..._renderProps}/> */}
        </Provider>
    )

    const state=store.getState()
    console.log(state)

    res.set('Content-Type', 'text/html');

    res.send(`
        <!doctype html>
            <html lang="en">

            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
                <meta name="theme-color" content="#000000">
                <link rel="manifest" href="/manifest.json">
                <link rel="shortcut icon" href="/favicon.ico">
                <title>React App</title>
                <link href="/css/main.c17080f1.css" rel="stylesheet">
            </head>
            <script type="text/javascript">window.__INITIAL_DATA__ = ${JSON.stringify(data)}</script>
            <script type="text/javascript">window.__INITIAL_STATE__ = ${JSON.stringify(state)}</script>
            <body><noscript>fuck u</noscript><div id="root">${htmlString}</div>

            <script type="text/javascript" src="/js/main.78ba2aae.js"></script>
            
            </body>

            </html>
    `);
});


app.listen(3001, () => {
    console.log('server running http://localhost:3001');
});