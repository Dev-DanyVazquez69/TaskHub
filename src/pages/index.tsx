import React from "react";
import TaskList from "@/components/tasks/taskList";
import TaskForm from "@/components/tasks/taskForm";
import { useTasks } from "@/model/useTask";

const Home: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <div>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
