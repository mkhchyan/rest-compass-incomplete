import {combineReducers} from 'redux'
import { authReducer } from './Auth/reducer'

export default combineReducers({
	Auth: authReducer,
})