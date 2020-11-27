import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Task from './Task';

const TasksList = ({
  tasks,
  editedTask,
  deletedTask,
  isTaskEditing,
  isTaskDeleting,
  taskEditingError,
  onEditedTaskChange,
  onDeletedTaskChange,
  onTaskEdit,
  onTaskDelete,
  onTasksReordered,
}) => {
  return (
    <div>
      <DragDropContext onDragEnd={({ source, destination }) => {
        if (destination && source.index !== destination.index) {
          let newTasks = [...tasks];
          const [removed] = newTasks.splice(source.index, 1);
          newTasks.splice(destination.index, 0, removed);
          onTasksReordered(newTasks.map((task, index) => ({ ...task, order: index })));
        }
      }}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {
                tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Task
                          task={task}
                          editedTask={editedTask}
                          deletedTask={deletedTask}
                          isTaskEditing={isTaskEditing}
                          isTaskDeleting={isTaskDeleting}
                          taskEditingError={taskEditingError}
                          onEditedTaskChange={onEditedTaskChange}
                          onDeletedTaskChange={onDeletedTaskChange}
                          onTaskEdit={onTaskEdit}
                          onTaskDelete={onTaskDelete}
                        />
                      </div>
                    )}
                  </Draggable>

                ))
              }
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  editedTask: PropTypes.object.isRequired,
  deletedTask:  PropTypes.object.isRequired,
  isTaskEditing: PropTypes.bool.isRequired,
  isTaskDeleting: PropTypes.bool.isRequired,
  taskEditingError: PropTypes.object,
  onEditedTaskChange: PropTypes.func.isRequired,
  onDeletedTaskChange: PropTypes.func.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onTasksReordered: PropTypes.func.isRequired,
};

TasksList.defaultProps = {
  taskEditingError: null,
};

export default TasksList;