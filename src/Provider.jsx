/**
 * React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

import React from "react";

export const ReduxContext = React.createContext();

export const Provider = ({ store, children }) => {
    return (
        <ReduxContext.Provider value={store}>
            {children}
        </ReduxContext.Provider>
    );
}
