module.exports = {
  entry: './src/app.tsx',
  output: {
    path: __dirname + 'public',
    filename: 'build/app.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, loader: 'ts-loader'
      }
    ]
  }
}