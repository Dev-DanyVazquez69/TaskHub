import api from "./apiConfig";
import { Task } from "../interfaces/Task";

const requestTasks = async (): Promise<Task[]> => {
  // Loading(true)
  let data:Task[] = [];
  let resposta = "";
  try {
    const response  = await api.get("/tasks");
    data = response.data;
    resposta = "ok";
  } catch (error: any) {
    if (error.response) {
      // O servidor respondeu com um código de status diferente de 2xx
      if (error.response.status === 404)
        resposta = "Não foi possivel cadastrar a tarefa";
      else if (error.response.status === 409)
        resposta = `Erro: ${error.response.data.message}`;
    } else if (error.request) {
      // A requisição foi feita, mas não houve resposta do servidor // erro 500
      resposta = "Sem resposta, verifique sua conexão ou tente mais tarde";
    } else {
      // Ocorreu um erro ao configurar a requisição
      resposta = `Erro ao configurar a requisição: ${error.message}`;
    }
  } finally {
    // Loading(false)
    return data;
  }
};

export default requestTasks;
