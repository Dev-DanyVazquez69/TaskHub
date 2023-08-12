import axios from 'axios'

const api = axios.create({
	baseURL: 'https://servertaskhub.danielsantos69.repl.co',
	headers: {
		'Content-Type': 'application/json',
	},
})

export default api
