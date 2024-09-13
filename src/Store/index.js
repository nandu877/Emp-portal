import {configureStore, createSlice}  from "@reduxjs/toolkit"

 const authSlice=createSlice({
    name:"auth",
    initialState:{isLogin:false,role:""},
    reducers:{
        login:(state,action)=>{
           const{isLogin,role}=action.payload;
           state.isLogin=isLogin;
           state.role=role;
        },
        logout:(state)=>{
            state.isLogin=false
            state.role=""
        }
    }
 })

 export const {login,logout}=authSlice.actions;

const UserSlice=createSlice({
    name:"user",
    initialState:{user:[]},
    reducers:{
        setUser:(state,action)=>{
            const{user}=action.payload
            state.user=user
        }
    }
})

export const{setUser}=UserSlice.actions

export const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        user:UserSlice.reducer
    }
 })

 