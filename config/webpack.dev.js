/*
 * @Author: hujialei 
 * @Date: 2021-10-11 17:34:08 
 * @Last Modified by:   hujialei 
 * @Last Modified time: 2021-10-11 17:34:08 
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     static: './dist',
   },
   plugins: [
   ]
 });