exports.getUser = 'SELECT email, password FROM user where email = ? and password = ?'
exports.getUserByEmail = 'SELECT email FROM user WHERE email = ?'