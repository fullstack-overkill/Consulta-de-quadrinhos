import axios from 'axios'

const api = axios.create({
	baseURL: facilita.api,
	withCredentials: true,
})


export {
	api,
}
