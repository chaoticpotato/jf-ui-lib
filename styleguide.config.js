const { version } = require('./package');
const path = require('path');

module.exports = {
  title: 'JotForm UI Component Library',
  components: 'src/components/**/[A-Z]*.js',
  exampleMode: 'expand',
  usageMode: 'expand',
	defaultExample: true,
	version,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/common/Provider')
  },
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
				},
			],
		},
	},
};
