import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/tasksSlice';
import styles from './TaskList.module.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks || []);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li key={task.id} className={styles.listItem}>
            {task.name}
            <button
              onClick={() => dispatch(removeTask(task.id))}
              className={styles.buttonDelete}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <li>No tasks added.</li>
      )}
    </ul>
  );
};

export default TaskList;
