import { configureStore } from '@reduxjs/toolkit'
// import manipulasi from '../action/manipulasi'
import rootReducer from "../reducers/index"
import thunk from 'redux-thunk'

export default configureStore({
  // reducer: {
    // makeup : manipulasi
    reducer : rootReducer,
    middleware:(getMiddleware) => getMiddleware().concat(thunk)
  // },
})