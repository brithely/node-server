const sql = require("./db.js");

// constructor
const User = function (user) {
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
    this.created_at = Date.now();
};

User.create = (newUser, result) => {
    console.log(newUser);
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findbyLogin = (email, password, result) => {
    sql.query(`SELECT * FROM user WHERE email = '${email}' and password = ${password}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ message: "Incorrect email/password" }, null);
    });
};

User.getAll = result => {
    sql.query("SELECT * FROM user", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
    });
};

User.updateById = (id, user, result) => {
    sql.query(
        "UPDATE user SET email = ?, name = ?, password = ? WHERE id = ?",
        [user.email, user.name, user.password, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found User with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated user: ", { id: id, ...user });
            result(null, { id: id, ...user });
        }
    );
};

User.remove = (id, result) => {
    sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found User with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted user with id: ", id);
        result(null, res);
    });
};

User.removeAll = result => {
    sql.query("DELETE FROM user", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} users`);
        result(null, res);
    });
};

module.exports = User;