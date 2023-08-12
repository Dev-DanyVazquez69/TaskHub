// components/TaskList.tsx
import React from "react";
import TaskItem from "./taskItem";
import styles from "../../styles/TaskList.module.scss";
import { Task } from "@/utils/interfaces/Task";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
