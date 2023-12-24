import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentAccount:{
        id:1,
        username:"HaticeCapac",
        fullName:"./HaticeCapac",
        avatar:"https://pbs.twimg.com/profile_images/1597192110800781314/uKMFImFR_bigger.png"
    },
    accounts: [
        {
            id:1,
            username:"HaticeCapac",
            fullName:"./HaticeCapac",
            avatar:"https://pbs.twimg.com/profile_images/1597192110800781314/uKMFImFR_bigger.png"
        },
        {
            id:2,
            username:"SahranurCapac",
            fullName:"./SahranurCapac",
            avatar:"https://pbs.twimg.com/profile_images/1597192110800781314/uKMFImFR_bigger.png"
        },
    ]
}

const auth = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(c => c.id !== action.payload)
            if(state.currentAccount&& action.payload===state.currentAccount.id){
                this._setCurrentAccount(false);
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})
export const {_addAccount,_removeAccount,_setCurrentAccount}=auth.actions;
export default auth.reducer