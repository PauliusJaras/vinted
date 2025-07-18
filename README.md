# Getting Started with the Infinite Scroll Application

## How to launch the application locally

### Clone repository

Access the terminal and use the command

```
git clone https://github.com/PauliusJaras/vinted.git 
```

### Install packages

Open the project directory and install packages

```
npm install
```

### Create a .env file

At the root directory create a **.env** file and paste the existing variables from the **.env.example** file

> [!TIP]
> Make a copy of .env.example file and rename it to .env.

### Launch the application

Run the command in the terminal to launch the application

```
npm run start
```

## How to launch the application with docker

### Create docker image

Open the root project directory. Run the command in the terminal

```
docker build -t infinite-app .
```

### Launch docker container 

Once the image is created, start the container by running the command

```
docker run -p 3000:3000 infinite-app
```

### Access the application

Go to localhost:3000

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
