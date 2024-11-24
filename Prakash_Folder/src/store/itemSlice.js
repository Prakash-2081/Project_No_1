// this is itemsSlice.js


import { createSlice } from "@reduxjs/toolkit";


 const itemsSlice=createSlice({
    name: 'items',
    initialState: [],
    reducers: 
        {
            addInitialItem: (state,action)=>{
                return action.payload;	
            },
        }
    
});
export const itemsActions=itemsSlice.actions;
export default itemsSlice;
