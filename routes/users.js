const express = require('express');
const router = express.Router();
const User = require("../models/user.js");

// Create a new Customer
router.post("/users/signup", (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Customer
    const user = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    });

    // Save Customer in the database
    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
});

// // Retrieve all Customers
// router.get("/users", User.findAll);

// Retrieve a single Customer with customerId
router.get("/users/login", (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    User.findbyLogin(req.body.email, req.body.password, (err, data) => {
        if (err) {
            console.log(err);
            res.status(404).send({
                message: err.message
            });
        }
        else res.send(data);
    })
});

// // Update a Customer with customerId
// router.put("/customers/:customerId", User.update);

// // Delete a Customer with customerId
// router.delete("/customers/:customerId", User.delete);

// // Create a new Customer
// router.delete("/customers", User.deleteAll);

module.exports = router;