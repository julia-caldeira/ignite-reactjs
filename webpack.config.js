//uso require pq o webpack funciona dentro do node, q soh entende require
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production', //development executa sem minucias de otimização, entao roda mais rapido
  //qual o arquivo inicial da aplicação: ENTRY
  //para o sourcemap:
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', //para encontrar erros no arq original, nao no arquivo do browser q é estranho
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'] //quais extensoes ele aceitara
  },
  devServer: {
    //antes era contentBase
    static: path.resolve(__dirname, 'public'),
    hot: true
  },

  //para conseguir importar arqs css
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    //como a aplicação se comporta qnd eu importar cada tipo de arquivo
    rules: [
      //aqui boto um obj pra cada tipo de arquivo
      {
        test: /\.jsx$/, //se termina com .jsx
        exclude: /node_modules/, //mas ignore os da pasta nodemodules
        use: {
          loader: 'babel-loader', //integra babel e o webpack
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.scss$/, //se termina com .css
        exclude: /node_modules/, //mas ignore os da pasta nodemodules
        use: ['style-loader', 'css-loader', 'sass-loader'] //integra babel e o webpack
      }
    ]
  }
}
