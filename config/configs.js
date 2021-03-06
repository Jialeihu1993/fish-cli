/*
 * @Author: hujialei 
 * @Date: 2021-09-29 17:47:17 
 * @Last Modified by:   hujialei 
 * @Last Modified time: 2021-09-29 17:47:17 
 */

 const path = require('path');
 const pkg = require(path.join(__dirname, '../package.json'));
 const used_keys = [
     'name', 
     'version', 
     'platform', 
     'task', 
   'thsi',
     'author',
     'author',
     'description', 
     'main', 
     'port', 
     'proxy', 
     'autoprefixer'
 ];
 
 let Options = {
     root: process.cwd(),
     dist: 'dist',
     lmageLimit: 5000
 };
 for (let key of used_keys) {
     Options[key] = pkg[key] || '';
 }
 
 module.exports = Options;