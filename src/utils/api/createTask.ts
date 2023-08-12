import api from "./apiConfig";

const createTask = async (title: string) => {
    let resposta = ''
	let body = {
		title: title,
        completed: false
	}
	let data
	// loading(true)
	try {
		const response = await api.post('/tasks', body)
		console.log(response.data)
	} catch (error: any) {
		if (error.response) {
			// O servidor respondeu com um código de status diferente de 2xx
			if (error.response.status === 404)
				resposta = 'Não existe este CPF na Base de Dados'
			else if (error.response.status === 409)
				resposta = `Erro: ${error.response.data.message}`
			else if (error.response.status === 500)
				resposta = `Dados inválidos verifique novamente`
		} else if (error.request) {
			// A requisição foi feita, mas não houve resposta do servidor // erro 500
			resposta = 'Sem resposta, verifique sua conexão ou tente mais tarde'
		} else {
			// Ocorreu um erro ao configurar a requisição
			resposta = `Erro ao configurar a requisição: ${error.message}`
		}
	} finally {
		// loading(false)
	}
}

export default createTask