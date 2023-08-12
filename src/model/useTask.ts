import React, { useState, useEffect } from "react";
import { Task } from "@/utils/interfaces/Task";
import requestTasks from "@/utils/api/requestTasks";
import deleteTask from "@/utils/api/deleteTask";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completed, setCompleted] = useState();

  const getTask = async () => {
    const resposta = await requestTasks();
    setTasks(resposta);
  };

  const removeTask = async (id: Number) => {
    alert(id);
    deleteTask(id);
  };

  const toggleCompleted = () => {};

  useEffect(() => {
    getTask();
  }, []);

  return {
    removeTask,
    tasks,
    completed,
    toggleCompleted,
  };
};
