# Vanilla API
*A KarenSetiawan product*
*http://reactveta.s3-website.us-east-2.amazonaws.com/*

## Backend (API)

The easiest way to run the backend is to follow the instructions in `Putting it together` below since the backend needs an Elasticsearch instance in order to function. To generate fake data for testing follow the instructions below under `bootstrapping`.

## Installation

Install with pip:

```
$ pip install -r requirements.txt
```
## Running the app

    # Start the Flask development web server
    python app.py 

Point your web browser to http://localhost:5000/

## Deployed

Deployed to AWS with EB (Elastic Beanstalk) 
http://flaskveta.us-east-2.elasticbeanstalk.com/

## Frontend

This section of the project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the `frontend` directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


