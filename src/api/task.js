import api from 'utils/api';

const taskApi = {
  loadTasks: () => api.get('/task'),
  createTask: ([params]) => api.post('/task', params),
  editTask: ([task]) => api.put(`/task/${task.id}`, task),
  deleteTask: ([id]) => api.delete(`/task/${id}`),
  reorderTasks: ([tasks]) => api.post('/task/reorder', { items: tasks.map(({ id, order }) => ({ id, order })) }),
};

export default taskApi;
