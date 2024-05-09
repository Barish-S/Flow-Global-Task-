import {configureStore} from '@reduxjs/toolkit'
import mainReducer from './Reducer/mainSlice'

export default configureStore({
    reducer:{
        home:mainReducer,
    }
})