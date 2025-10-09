import {configureStore} from '@reduxjs/toolkit'
import { UserReducer,MovieReducer, GptReducer } from './appSlice';


const AppStore = configureStore({
    reducer:{
        UserReducer:UserReducer,
        MovieReducer:MovieReducer,
        GptReducer:GptReducer
    }
})

export default AppStore;