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

**useSelector hook**

Next is the useSelector hook, which is used to conveniently access any state managed in Redux memory. Its sort of a wrapper around store.getState(). 

If you wanted to access the numOfCakes which is stored in the cakesSlice and displayed in the CakeView component.

- in the CakeView.jsx import useSelector from react-redux
- it takes a fn as a parameter, which is called: selector function, and receives the state as its argument and returns a value from the state
- since numOfCakes is part of the cakeSlice and the store is refering to its reducers name, "cake", the fn has to return state.cake.numOfCakes to get access to the desired value.

**useDispatch hook**

- then you would also need the useDispatch hook, which is used to dispatch an action with react-redux. It returns a reference to the dispatch fn from the redux store.
- now you can add click handler on the buttons and dispatch actions, which involves (eg) in CakeView.jsx the import of the action creators from the cakeSlice.
(ordered and restocked)  
- if you now test it out in the browser the cake count should decrements by 1 whenever you press "Order cake" and since we still have the "Buy 1 cake and get an ice cream for free" - offer going on, the iceCreamCount value also decrements by 1
- By clicking restore cakes the cakeCount increments by 5 (what you have passed into the action creator fn restocked)

---

## Note

- store only as much state as you need in the redux store
- everything else could just be local component state

For example: Instead of restocking the (eg) numOfIcecreams by a fixed number, lets allow the user to enter a restock value. For that you would need an input field and a variable managed by useState.

---

## userSlice/UserView and the async action

- make use of createAsyncThunk from the rtk in the userSlice to fetch and display data in the UserView component.
- create an initialState object which contains 3 properties
  - loading to indicate that the request is happening in the background
  - users to store an array of users fetched from the api
  - and error to display an error if there was any

- next with fetchUsers utilize the createAsyncThunk fn, first argument is the action.type ('user/fetchUsers'), and the 2nd argument is the async fn which returns a promise (which can be pending, fulfilled and rejected)
- in this case we are querying "jsonplaceholder" (fake rest api) to fetch a list of random users

Again: createAsyncThunk dispatches the lifecycle methods of a promise  as actions
- thus you have 3 cases for the "extraReducer":
fetchUsers.pending, fetchUsers.fulfilled and fetchUsers.rejected
- finally you export the async action thunk and the reducer as default

- finally display the list of users in the UserView component, which will be a combination of the useSelector and the useDispatch hook coupled with the useEffect hook (with an empty dependency array so that useEffect only runs once after the components mounts)

