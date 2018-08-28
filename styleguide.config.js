const loaders = require('loaders')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  title: 'JotForm UI Component Library',
	components: 'src/components/**/[A-Z]*.js',
  exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
  usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
  ignore: [
    '**/*.spec.js',
    '**/components/CounterButton/index.js',
    '**/components/CounterButton/CounterButton.js'
    ],
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/common/Provider')
	},
	webpackConfig: {
		module: {
			loaders: loaders.all
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('development')
				},
				__SERVER__: false,
				__CLIENT__: true,
				__STATISTICS__: false
			})
		]
	}
}

