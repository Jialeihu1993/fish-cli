/*
 * @Author: hujialei 
 * @Date: 2021-09-28 19:11:56 
 * @Last Modified by:   hujialei 
 * @Last Modified time: 2021-09-28 19:11:56 
 */
const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production',
 });