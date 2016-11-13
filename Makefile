setup:
	npm install jest -g
	npm install --save-dev jest babel-jest babel-jest babel-polyfill babel-preset-es2015 babel-preset-react react-test-renderer
	npm install --save-dev enzyme react-addons-test-utils
test:
	npm test
