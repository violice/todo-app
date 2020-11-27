import React, { useState } from 'react';
import { useAsync } from 'react-async';
import { TaskForm, TasksList } from 'components';
import { taskApi } from 'api';
import { useStore } from 'utils/store';
import { LoadingIndicator, Message } from 'components/shared';

const TasksContainer = () => {
  const [{ tasks }, setStore] = useStore();

  const [createdTask, setCreatedTask] = useState({ body: '', title: '' });
  const [editedTask, setEditedTask] = useState({});
  const [deletedTask, setDeletedTask] = useState({});

  const { isLoading, error } = useAsync({
    promiseFn: taskApi.loadTasks,
    onResolve: tasks => setStore({ tasks }),
  });
  const { isLoading: isTaskCreating, error: taskCreatingError, run: createTask } = useAsync({
    deferFn: taskApi.createTask,
    onResolve: (newTask) => {
      setStore({ tasks: [...tasks, newTask] });
      setCreatedTask({ body: '', title: '' });
    },
  });
  const { isLoading: isTaskEditing, error: taskEditingError, run: editTask } = useAsync({
    deferFn: taskApi.editTask,
    onResolve: (newTask) => {
      let newTasks = [...tasks];
      const index = newTasks.findIndex(task => task.id === newTask.id);
      newTasks[index] = { ...newTask };
      setStore({ tasks: newTasks });
      setEditedTask({});
    }
  });
  const { isLoading: isTaskDeleting, run: deleteTask } = useAsync({
    deferFn: taskApi.deleteTask,
    onResolve: ({ deleted }) => {
      setStore({ tasks: tasks.filter(task => task.id !== deleted) });
      setDeletedTask({});
    },
  });
  const { run: reorderTasks } = useAsync({ deferFn: taskApi.reorderTasks });

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <Message value={error.message} />
  }

  return (
    <>
      <TaskForm
        task={createdTask}
        isLoading={isTaskCreating}
        error={taskCreatingError}
        onTaskChange={setCreatedTask}
        onFormSubmit={createTask}
      />
      <TasksList
        tasks={tasks}
        editedTask={editedTask}
        deletedTask={deletedTask}
        isTaskEditing={isTaskEditing}
        isTaskDeleting={isTaskDeleting}
        taskEditingError={taskEditingError}
        onEditedTaskChange={setEditedTask}
        onDeletedTaskChange={setDeletedTask}
        onTaskEdit={editTask}
        onTaskDelete={deleteTask}
        onTasksReordered={newTasks => {
          setStore({ tasks: newTasks });
          reorderTasks(newTasks);
        }}
      />
    </>
  );
};

export default TasksContainer;