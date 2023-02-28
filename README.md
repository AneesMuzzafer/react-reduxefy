# React Reduxefy

**React Reduxefy** is the perfect companion for [**Reduxefy**](https://www.npmjs.com/package/reduxefy), a lightweight and simplified implementation of Redux. With **React Reduxefy**, you can easily connect your React components to your Reduxefy store, making state management in your React app a breeze.

Be sure to check out [**Reduxefy**](https://www.npmjs.com/package/reduxefy) to learn more about why this package exists.

## Installation

You can install via npm by running

```bash
    npm install react-reduxefy reduxefy
    # Note that you'll need Reduxefy as well, as that provides the core state management functionality.
```

## Usage

With **React Reduxefy**, you get all the goodness of the original `react-redux` library, but with the added benefits of being lighter than a feather.

To start using **React Reduxefy**, simply wrap your app's root component with the `Provider` component, passing in your **Reduxefy** store as a prop:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-reduxefy';
import { createStore } from 'reduxefy';
import { counterReducer } from './counterReducer';
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
Once you've wrapped your app with the `Provider`, you can use the `useSelector` hook to access the store state and the `useDispatch` hook to dispatch actions:

```js
import React from "react";
import { useSelector, useDispatch } from "react-reduxefy";
import { ADD, SUBTRACT } from "./counterReducer";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleAdd = (num) => {
    dispatch({ type: ADD, payload: num });
  };

  const handleSubtract = (num) => {
    dispatch({ type: SUBTRACT, payload: num });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => handleAdd(5)}>Add</button>
      <button onClick={() => handleSubtract(1)}>Subtract</button>
    </div>
  );
};

```

And inside the reducer.js:

```js
//counterReducer.js
const initialState = {
  count: 0
};

export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + action.payload
      };
    case SUBTRACT:
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
};

```

And voila! You now have a fully functioning **React Reduxefy** component that is connected to your **Reduxefy** store.

## License

[MIT]

So what are you waiting for? Give **React Reduxefy** a try and see how it can make your React app development experience even smoother!
