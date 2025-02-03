# Javascript

<!-- Before you get started, make sure you have node installed and configured correctly.

To build, open your terminal and navigate to the `javascript` directory in this project and run `npm install`.

To start your server, run `node index.js`. Open up your favorite browser and navigate to http://localhost:3001/ and you should see "Hello World!".

To run tests for the project, run `npm test`.

To lint the project, run `npm run lint`.

Now follow the steps outlined in [The Problem](https://github.com/hinge-health/interviews-services#the-problem) -->

## Local Environment Setup

1.  Install node version manager (nvm) from [here](https://github.com/nvm-sh/nvm#install--update-script) (if not already installed)
2.  Run following commands to setup node version

        nvm install v20.18.0
        nvm use

3.  Install dependencies

        npm install

4.  Start typescript compiler and run service

    In order to watch for changes and run the application locally you have to run the TypeScript compiler in watch mode in addition to any/all the required entry points.

        npm run ts:watch # Terminal 1

        npm run app:dev # Terminal 2

5.  Your server should be running at [http://localhost:3001](http://localhost:3001)
