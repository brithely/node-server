
exports.index = async (req, res, next) => {
    try {
        return res.render('index.html');
    } catch (err) {
        return res.status(500)
    }
}

exports.todoList = async (req, res, next) => {
    try {
        return res.render('pages/todo.html');
    } catch (err) {
        return res.status(500)
    }
}