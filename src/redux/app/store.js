import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import countryReducer from "../features/country/countrySlice"




export const store = configureStore({ //burdaki reducerları tüm sayfalarad kullanmak için store yi props olarak geçmek gerek -> index.js
    reducer:{
        counter: counterReducer,
        country: countryReducer
    }

})