const pool = require("../database/pool");
const UserQuery = require("../queries/user-query")

exports.getUser = async (email, password) => {
    try {
        let data = await pool.query(UserQuery.getUser, [email, password]);
        return data[0]
    } catch (err) {
        throw Error(err);
    }
}

exports.getUserByEmail = async (email) => {
    try {
        let data = await pool.query(UserQuery.getUserByEmail, email);
        return data[0]
    } catch (err) {
        throw Error(err);
    }
}