> This project is my implementation of [Hinge Health](https://www.hingehealth.com/) technical assessment. I did my implementation using JavaScript, hence my implementation can be found in /javascript directory.  
> 📌 You can find the assessment instructions [here](./ASSESSMENT.md).

# Hinge Health Technical Assessment

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

## Running Tests

    npm run test
