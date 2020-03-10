import axios from 'axios';

// HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://jsonplaceholder.typicode.com'
}

// API 함수
function fetchTodoList() {
  return axios.get(`${config.baseUrl}/posts`);
}

function addTodo() {
  return axios.post(`${config.baseUrl}/posts`, {
        "userId": 11,
        "title": 'test',
        "completed": false
  })
}

function removeTodo() {
  return axios.delete(`${config.baseUrl}/posts/1`)
}

function editTodo() {
  return axios.put(`${config.baseUrl}/posts/1`,{
    "userId": 1,
    "id": 1,
    "title": "수정완료",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  })
}


export {
  fetchTodoList,
  addTodo,
  removeTodo,
  editTodo
}