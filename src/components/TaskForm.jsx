import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import styles from './TaskForm.module.css';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      dispatch(addTask({ id: Date.now(), name: taskName }));
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className={styles.input}
        placeholder="Add new task"
      />
      <button type="submit" className={styles.buttonAdd}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
