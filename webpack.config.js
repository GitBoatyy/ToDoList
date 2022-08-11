const path = require('path');

module.exports = {
    mode: 'development',
  entry: {
    index: './src/index.js',
    taskcreate: './src/taskcreate.js',
    blur: './src/taskprompt.js',
    project: './src/project.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};