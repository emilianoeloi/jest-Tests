setup:
	npm install jest -g
	npm install --save-dev jest babel-jest babel-jest babel-polyfill babel-preset-es2015 babel-preset-react react-test-renderer
	npm install --save-dev enzyme react-addons-test-utils
	npm install -g create-react-app

test:
	npm test

react-start:
	cd hello-world; npm start	
