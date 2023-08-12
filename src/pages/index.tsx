import React from "react";
import TaskList from "@/components/tasks/taskList";
import TaskForm from "@/components/tasks/taskForm";
import { useTasks } from "@/model/useTask";

const Home: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
