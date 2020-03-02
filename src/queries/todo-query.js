exports.insertTodo = 'INSERT INTO todo SET ?'
exports.getTodo = 'SELECT todo_id, text, user_id, created_at FROM todo where todo_id = ?'
exports.getAllTodo = 'SELECT todo_id, text, user_id, created_at FROM todo'