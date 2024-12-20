// this is index.js

import { configureStore } from "@reduxjs/toolkit";
import itemsSlice  from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./Bag";



const myntraStore=configureStore({
    reducer: {
        items: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer,
    }
})
export default myntraStore
