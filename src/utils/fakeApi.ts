// utils/fakeApi.ts
import { Task } from "./interfaces/Task";

let tasks: Task[] = [
  {
    id: 1,
    title: "1",
    completed: true,
  },
  {
    id: 1,
    title: "1",
    completed: true,
  },
  {
    id: 1,
    title: "1",
    completed: true,
  },
];

export function getTasks() {
  return tasks;
}

export function addTask(task: Task) {
  tasks.push(task);
}

// Implementar funções para atualizar, marcar como concluída e excluir tarefas
