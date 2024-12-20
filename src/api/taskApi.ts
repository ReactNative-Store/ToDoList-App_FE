import rootApi from "./rootApi";

export const fetchTasks = () => {rootApi.get('/tasks')}
export const fetchTasksDetail = (id: string) => {rootApi.get(`/tasks/${id}`)}
export const fetchTasksByTodoId = (id: string) => {rootApi.get(`/tasks/getTaskByTodoList/${id}`)}
