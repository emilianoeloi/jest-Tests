setup:
	npm install jest -g
	npm install --save-dev jest babel-jest babel-jest babel-polyfill babel-preset-es2015 babel-preset-react react-test-renderer
	npm install --save-dev enzyme react-addons-test-utils
	npm install jest-css-modules --save-dev
	npm install -g create-react-app

all-test:
	npm test
all-test-update:
	jest --watch --coverage --bail -o -u

## React
r-start:
	cd hello-world; npm start
r-test:
	cd hello-world; jest
r-test-update:
	cd hello-world; jest --watch --coverage --bail -o -u

## React Native
rn-setup:
	cd hello-world; npm install
rn-ios:
	cd hello-world; react-native run-ios
rn-test:
	cd helloWorldNative; npm test
rn-test-update:
	cd helloWorldNative; jest --watch --coverage --bail -o -u
