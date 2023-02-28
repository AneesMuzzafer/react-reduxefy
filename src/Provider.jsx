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
import { ReduxContext } from "./hook";

export const Provider = ({ store, children }) => {
    return (
        <ReduxContext.Provider value={store}>
            {children}
        </ReduxContext.Provider>
    );
}
