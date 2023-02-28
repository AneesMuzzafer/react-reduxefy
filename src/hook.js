/**
 * React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

import React from "react"

export const ReduxContext = React.createContext();

export const useDispatch = () => {
    const store = React.useContext(ReduxContext);
    return store.dispatch;
}

export const useSelector = (fn) => {
    const store = React.useContext(ReduxContext);
    const [state, setState] = React.useState(fn(store.getState()));

    React.useLayoutEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const nextState = fn(store.getState());
            if (!Object.is(state, nextState)) {
                setState(nextState);
            }
        })
        return () => unsubscribe();
    }, []);

    return state;
}
