import {configureStore} from '@reduxjs/toolkit'
import { UserReducer,MovieReducer } from './appSlice';


const AppStore = configureStore({
    reducer:{
        UserReducer:UserReducer,
        MovieReducer:MovieReducer
    }
})

export default AppStore;