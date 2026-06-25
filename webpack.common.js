const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

const fs = require('fs'); // импорт fs

// функция для рекурсивного поиска всех HTML в src
function getHtmlPages(dir) {
  const entries = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach(item => {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      entries.push(...getHtmlPages(fullPath));
    } else if (item.name.endsWith('.html')) {
      entries.push(fullPath);
    }
  });
  return entries;
}

// список всех HTML-файлов
const htmlFiles = getHtmlPages(path.resolve(__dirname, 'src'));

const entries = {
  index: './src/index.js',
  production: './src/production.js',
  era: './src/era.js',
  publisher: './src/publisher.js',
  region: './src/region.js',
  article: './src/article.js',
};

// создаём массив HtmlWebpackPlugin
const htmlPlugins = htmlFiles.map(filePath => {
  const filename = path.relative(path.resolve(__dirname, 'src'), filePath);
  const baseName = path.basename(filename, '.html');
  const pluginOptions = {
    template: filePath,
    filename
  };

  if (entries[baseName]) {
    pluginOptions.chunks = [baseName];
  }

  return new HtmlWebpackPlugin(pluginOptions);
});

module.exports = {
  entry: entries,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
    assetModuleFilename: 'assets/[name].[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  esmodules: true
                },
                modules: false
              }],
              ['@babel/preset-react', {
                runtime: 'automatic'
              }]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: false
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]'
        }
      }
    ]
  },
  plugins: [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),

  ...htmlPlugins,  // ✅ все HTML автоматически

  new HtmlWebpackPartialsPlugin([
    {
      path: path.join(__dirname, './src/partials/analytics.html'),
      location: 'analytics',
      template_filename: '*',
      priority: 'replace'
    }
  ])
],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/stylesheets')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}