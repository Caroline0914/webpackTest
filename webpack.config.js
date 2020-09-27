const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name][hash:5].js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 30 * 1024
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["index"],
      filename: "index.html"
    })
  ],
  target: "web",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": __dirname + "/src"
    }
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  stats: {
    modules: false
  }
}