import rootApi from "./rootApi";

export const fetchTodos = () => {rootApi.get('/todos')}
export const fetchTodosDetail = (id: string) => {rootApi.get(`/todos/${id}`)}