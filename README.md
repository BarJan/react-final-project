# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Project uses Parse to connect to https://parse-dashboard.back4app.com/ using DB
Hebrew dates - usage of Hebcal.HDate - https://github.com/hebcal

# Pure / you app

Link to github pages: https://barjan.github.io/react-final-project/#/.

-Test user:

username: dan@gmail.com

password: 123456

-----------

A web application developed from scratch using React.js.

The app is responsive and uses various web-development’s tools:

html | React.js| css | git | react hooks | react router | Parse

This App is ment to be used as a calendar for Jewish lifecycle events

Main features:

*User:

login \ out

update personal details

watch event list of current user

*Calendar:

find hebrew date on calendar

add event date to calendar (this will automaticaly update the DB so events of user will be loaded everywhere)



#structure:

*homepage  [renders navbar, Calendar [renders Days]]

*login page

*dates page - a list of all stored event dates

*profile page - used to update personal details to DB

*Calendar component renders Days components as hebrew calendar
clicking on each day open modal to add \store event to DB

*DateObj class represent an hebrew date (proxy of Hebcal.HDate)

*UserObj classe represent a user of Parse (the current user logged in)

##  Enjoy!

-----------
-----------

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
