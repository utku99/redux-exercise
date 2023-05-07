import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    country: []
}
export const getCountry = createAsyncThunk("getCountry", async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all")
    return data
})



export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        /* bu kullanım yanlış, boş bir array döndürür
        getCountry: async(state) => { 
            const {data} = await axios.get("https://restcountries.com/v3.1/all")
            state.country = data
        }*/
    },

    //sayfa yüklendiğinde başka bi siteden apileriyle birlikte veri çekiyoruz. Bu gibi zaman gerektiren konularda reducer yerine extrareducer kullanılır
    extraReducers: (builder) => {
        builder.addCase(getCountry.fulfilled, (state, action) => {
            state.country = action.payload
        })
    }





})

export default countrySlice.reducer