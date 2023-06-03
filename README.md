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