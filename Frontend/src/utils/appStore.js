import {configureStore} from '@reduxjs/toolkit'
import { UserReducer } from './appSlice';


const AppStore = configureStore({
    reducer:{
        UserReducer:UserReducer
    }
})

export default AppStore;