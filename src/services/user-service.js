const pool = require("../database/pool");
const UserQuery = require("../queries/user-query")

exports.getUser = async (email, password) => {
    try {
        let data = await pool.query(UserQuery.getUser, [email, password]);
        return data[0]
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}
