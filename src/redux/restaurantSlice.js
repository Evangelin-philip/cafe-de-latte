import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// api call -createAcsyncThunk
// for doing api call in createSlice, we cant do as its async function so we need createAcsyncThunk

// exporting actions for componnet
export const fetchRestaurants = createAsyncThunk('restaurantList/fetchRestaurants',()=>{
                                        // response of createAsyncThunk=
                                                                                // pending
                                                                                // fullfill
                                                                                // reject
    // api call-any aproch of api call is okay,
    // here we are using axios
    // no need of instance-----no multiple api calls so direct axios api call

    // ---------------------------------
    // not ('./restaurants.json') bcos not in src folder but in public folder  so('/restaurants.json')
    // -----------------------------
    // axios return promise so (.then)
    // .then(callback function with argumnet response (returned data and the data neeed is always inside the response.data key))
    // response=returning data,   response.data= in axios the needed data always in data key, -----------response.data.restaurants bcos in json file w e have an object with arrya in restaurants key
    return axios.get('/restaurants.json').then((response)=>response.data.restaurants)
})

const restaurantSlice = createSlice({
    name:'restaurantList',
    initialState:{
        loading:false,
        allRestaurants:[],
        error:''
    },
    // argument of extrareducers will be action
    // so we need to use builder ojbject to get the actions
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurants.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRestaurants.fulfilled,(state,action)=>{
            state.loading=false
            state.allRestaurants=action.payload
            state.error=""
        })
        builder.addCase(fetchRestaurants.rejected,(state,action)=>{
            state.loading=false
            state.allRestaurants=[]
            state.error=error.message
        })

    }
})
// exporting reducer for store

export default restaurantSlice.reducer