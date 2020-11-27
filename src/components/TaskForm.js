import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Button, TextField, Message, LoadingIndicator } from 'components/shared';

const useStyles = createUseStyles({
  container: {
    maxWidth: '320px',
    padding: '32px',
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
    borderRadius: '8px',
    marginBottom: '16px',
    position: 'relative',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '32px',
  },
});

const TaskForm = ({ task, isLoading, error, onTaskChange, onFormSubmit }) => {
  const styles = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(task);
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      {isLoading && <LoadingIndicator withOverlay />}
      <TextField title="Title" value={task.title} onChange={newTitle => onTaskChange({ ...task, title: newTitle })} />
      <TextField title="Body" value={task.body} multiline onChange={newBody => onTaskChange({ ...task, body: newBody })} />
      {error &&
        <div className={styles.messageContainer}>
          <Message value={error.message} />
        </div>
      }
      <div className={styles.buttonContainer}>
        <Button title={task.id ? 'Edit task' : 'Create task'} />
      </div>
    </form>
  );
};


TaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  onTaskChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

TaskForm.defaultProps = {
  isLoading: false,
  error: null,
};

export default TaskForm;