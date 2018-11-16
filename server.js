const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const renderer = require('vue-server-renderer').createRenderer();
const server = express();
const config = require('./webpack.config.js');
const complier = webpack(config);
const Vue = require('vue');


server.use(webpackDevMiddleWare(complier, {


    publicPath: config.output.publicPath

}))




// server.get('*', (req, res) => {

//     const Vue = require('vue')
//     const app = new Vue({
//         data: {

//             url: req.url

//         },
//         template: `<div>您访问的url是 {{url}}</div>`
//     })


//     renderer.renderToString(app, (err, html) => {
//         if (err) {
//             res.status(500).end('Internal Server Error')
//             return
//         }
//         res.end(`
//           <!DOCTYPE html>
//           <html lang="en">
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <meta http-equiv="X-UA-Compatible" content="ie=edge">
//             <head><title>Hello</title></head>
//             <body>${html}</body>
//           </html>
//         `)
//     })



// })


server.listen(3000, () => {

    console.log('监听于3000端口。。。');


})