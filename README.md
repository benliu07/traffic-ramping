# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Reasons for Decisions

I decided to use Material UI to cut down on the time I needed to spend styling the application, without having to write everything from scratch. Styled-components was used to customise some Material UI components whilst co-locating the styles.

Mock JSON data for DelayedRoutes and the WeatherWidget were grouped under the `/mocks` folder to simulate backend data or API responses whilst utility functions like `getRampAlgorithms` was put under `/utils` for shared logic. I used a component based folder structure for separation of concerns and maintainability.

Due to how frequently the ramp chart was being updated I decided to throttle the updates every 2500ms which gives a nicer user experience where the pie chart is able to animate whilst giving the user enough time to capture the numbers before the next batch of updates comes in. If the chart would receive a rapid burst of updates with a longer time of rest before the next batch of updates comes in then debounce would be more computationally efficient.

I deployed the application via [surge.sh](https://surge.sh/) as it provides a quick deploy in seconds via the command line without needing to commit build artefacts into a dedicated repository. Here is the deployed link: [traffic-ramping.sh](https://traffic-ramping.surge.sh/).

## Compromises due to time constraints

Preventing the ramp chart from re-rendering when its accordion is closed was not implemented.

Incorporating Storybook for visual regression testing would enhance testing for a production-grade application.

Adding more accessibility features is a priority for future improvements to ensure a better user experience.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
