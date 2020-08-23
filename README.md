This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## To reproduce the concern.

Example has been taken from https://github.com/kentcdodds/react-testing-library-course/


Goto `post-editor.js` and comment out anything for eg. Line 13. `tags: tags.value.split(",").map((t) => t.trim())`.
This would break `post-editor-mock-api.test.js` which uses mocking `api.js` modules.
But `post-editor-msw.test.js` wouldn't break.
This could be fixed by spying on `api.js`. This is implemented on `post-editor-msw.test.js` line 51-54.
But I'm not sure if that's a right way to do.
