## basic-redux-toolkit-project

Create new react project\
You could do that by using create-react-app like in the previous project or with Vite.
Lets go with the latter..  

```sh
npm create vite@latest basic-react-rtk-project
```

cd into that folder and install the dependencies
```sh
npm install
```

additionally you need to install RTK and axios
```sh
npm i @reduxjs/toolkit axios 
```
You should see them listed as dependencies in the package.json.

---

Started with creating the store and the "slices" for each feature.

After scaffolding the UI components (CakeView, IceCreamView and UserView), the next step is the connection with the RTK.

**Access to the redux store**

-  1st you need to install the react-redux package
  
```sh
npm i react-redux
```

- 2nd step: you need to make the redux store available to the react component tree (this is where the redux library makes its first appearance)
- to provide the redux store to the react app the lib exports a component called: Provider
- in main.jsx (or index.js if you used CRA) import Provider and wrap the App component with it
- then import the store and specify it as a prop on the Provider
- since the Provider uses the Context Api under the hood, it is typically at the top of the component tree and will provide the store to every component

Thats what it takes to connect the react app with redux.

You can now start reading values from and dispatch actions to the store.

Next is the useSelector hook, which is used to conveniently access any state managed in Redux memory.

If you wanted to access the numOfCakes which is stored in the cakesSlice and displayed in the CakeView component.

- in the CakeView.jsx import useSelector from react-redux
- it takes a fn as a parameter, which is called: selector function, and receives the state as its argument and returns a value from the state
- since numOfCakes is part of the cakeSlice and the store is refering to its reducers name, "cake", the fn has to return state.cake.numOfCakes to get access to the desired value.
