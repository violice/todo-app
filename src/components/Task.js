import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { TaskForm } from 'components';
import { LoadingIndicator } from './shared';

const useStyles = createUseStyles({
  container: {
    maxWidth: '320px',
    padding: '32px',
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
    borderRadius: '8px',
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  leftPart: {
    flex: '1',
  },
  rightPart: {
    display: 'flex',
    alignItems: 'center',
    '&>i': {
      '&:hover': {
        cursor: 'pointer',
      },
      '&:last-child': {
        color: '#FF1A43',
      },
    },
  },
  title: {
    fontSize: '16px',
    fontWeight: '500',
  },
  body: {
    fontSize: '14px',
  },
});

const Task = ({
  task,
  editedTask,
  deletedTask,
  isTaskEditing,
  isTaskDeleting,
  taskEditingError,
  onEditedTaskChange,
  onDeletedTaskChange,
  onTaskEdit,
  onTaskDelete,
}) => {
  const styles = useStyles(); 

  if (editedTask.id === task.id && editedTask.mode === 'edit') {
    return (
      <TaskForm
        task={editedTask}
        isLoading={isTaskEditing}
        error={taskEditingError}
        onTaskChange={onEditedTaskChange}
        onFormSubmit={onTaskEdit}
      />
    );
  }

  return (
    <div className={styles.container}>
      {(((editedTask.id === task.id) && isTaskEditing) || (isTaskDeleting && (task.id === deletedTask.id))) && <LoadingIndicator withOverlay />}
      <div className={styles.leftPart}>
        <div className={styles.title}>{task.title}</div>
        <div className={styles.body}>{task.body}</div>
      </div>
      <div className={styles.rightPart}>
        {task.completed
          ? <i className="material-icons" onClick={() => {
            onEditedTaskChange({ ...task, mode: 'default' });
            onTaskEdit({ ...task, completed: false });
          }}>check_box</i>
          : <i className="material-icons" onClick={() => {
            onEditedTaskChange({ ...task, mode: 'default' });
            onTaskEdit({ ...task, completed: true });
          }}>check_box_outline_blank</i>
        }
        <i className="material-icons" onClick={() => onEditedTaskChange({ ...task, mode: 'edit' })}>edit</i>
        <i className="material-icons" onClick={() => {
          onDeletedTaskChange(task);
          onTaskDelete(task.id);
        }}>close</i>
      </div>
    </div >
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  editedTask: PropTypes.object.isRequired,
  deletedTask: PropTypes.object.isRequired,
  isTaskEditing: PropTypes.bool.isRequired,
  isTaskDeleting: PropTypes.bool.isRequired,
  taskEditingError: PropTypes.object,
  onEditedTaskChange: PropTypes.func.isRequired,
  onDeletedTaskChange: PropTypes.func.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  taskEditingError: null,
};

export default Task;