exports.insertTodo = 'INSERT INTO todo SET ?'
exports.getTodo = 'SELECT todo_id, text, user_id, created_at FROM todo where todo_id = ?'
exports.getAllTodo = 'SELECT todo_id, text, user_id, created_at FROM todo'
exports.getAllTodoFromUser = 'SELECT todo_id, text, todo.created_at FROM todo LEFT JOIN user on user.id = todo.user_id where user.email = ?'