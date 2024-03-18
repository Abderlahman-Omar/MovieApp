import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/language";
import counterReducer from "./slices/counter";
import loaderReducer from "./slices/loader";
import colorReducer from "./slices/color";
import favouritesReducer from "./slices/favourites";
const store = configureStore({
    reducer: {
        language: languageReducer,
        counter: counterReducer,
        loader: loaderReducer,
        color: colorReducer,
        favourites: favouritesReducer,
    },
});
export default store;
