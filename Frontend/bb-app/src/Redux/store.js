import {configureStore} from '@reduxjs/toolkit'
import authSlice from './Features/Authentic/authSlice'

const store = configureStore({
    reducer : {
        auth :  authSlice.reducer,

    }
})
export default store