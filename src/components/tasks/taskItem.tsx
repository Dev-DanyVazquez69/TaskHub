// components/TaskItem.tsx
import React from "react";
import styles from "../../styles/TaskItem.module.scss";
import { Task } from "@/utils/interfaces/Task";
import { useTasks } from "@/model/useTask";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  
  const {removeTask} = useTasks()
  return (
    <div className={styles.taskItem}>
      <input type="checkbox" checked={task.completed} />
      <span>{task.title}</span>
      <input type="checkbox" />
      <button onClick={() => removeTask(task.id)}>delete</button>
      <button onClick={() => alert("oi")}>Edit</button>
      {/* Botões para marcar como concluída, editar e excluir */}
    </div>
  );
};

export default TaskItem;
