/*
 * @Author: hujialei 
 * @Date: 2021-09-28 19:17:29 
 * @Last Modified by: hujialei
 * @Last Modified time: 2021-09-28 20:49:28
 */
const glob = require('glob');
const path = require('path'), join = path.join;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CONFIGS = require('./configs'),
projectRoot = glob.sync(CONFIGS.root)[0];

module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
   ],
   output: {
     filename: '[name].bundle.js',
     path: join(projectRoot, CONFIGS.dist),
     clean: true,
   },
   cache: {
    // 使用持久化缓存
    type: "filesystem", //memory:使用内容缓存 filesystem：使用文件缓存
   },
   module: {
     rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.less$/i,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'less-loader',
                options: {
                  lessOptions: {
                    strictMath: true,
                  },
                },
              },
            ],
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                        ],
                    },
                },
            ],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
   },
};