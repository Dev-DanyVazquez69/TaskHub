// components/TaskForm.tsx
import React, { useState } from 'react';
import { addTask } from '@/utils/fakeApi';
import styles from '.././../styles/TaskForm.module.scss'
import { Task } from '@/utils/interfaces/Task';
import createTask from '@/utils/api/createTask';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== '') {
      createTask(title)
      setTitle('');
    }
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;
