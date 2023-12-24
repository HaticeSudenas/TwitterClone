import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    backGroundColor: {
        name:"darker",
        primary: "#000",
        primaryAlpha:"#000000a6",
        secondary: "#16181c",
        third: "#273340",
        modal: "#5b708366"
    },
    color: {
        primary: "#1d9bf0",
        secondary: "#8ecdf8",
        base: "#e7e9ea",
        baseSecondary: "#71767b",
    },
    fontSize: 16
    /*  
     
     
     backGroundColor:{
         primary:"#15202b",
         secondary:"#1e2732",
         third:"#263340",
         modal:"#5b708366"
     },
     color:{
         primary:"#1d9bf0",
         secondary:"#8ecdf8",
         base:"#f7f9f9",
         baseSecondary:"#8b98a5",
     },
     fontSize:16
 
      backGroundColor:{
         primary:"#fff",
         secondary:"#f7f9f9",
         third:"#eff3f4",
         modal:"#00000066"
     },
     color:{
         primary:"#1d9bf0",
         secondary:"#8ecdf8",
         base:"#0f1419",
         baseSecondary:"#8b98a5",
     },
     fontSize:16
     */

}

const appearance = createSlice({
    name: "appearance",
    initialState: initialState,
    reducers: {
        _setBackGroundColor: (state, action) => {
            state.backGroundColor = action.payload
        },
        _setColor: (state, action) => {
            state.color = action.payload
        },
        _setFontSize: (state, action) => {
            state.fontSize = action.payload
        },

    }
})
export const { _setBackGroundColor, _setColor, _setFontSize } = appearance.actions;
export default appearance.reducer