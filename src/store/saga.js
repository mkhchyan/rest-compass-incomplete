import axios from "axios";
import { takeEvery } from 'redux-saga/effects'

const Axios = axios.create({
	withCredentials: true
})

function* AddUser({ data, navigate }) {
	console.log('Saga root');
}

export function* rootSaga() {
	yield takeEvery("ADD_USER", AddUser)
}