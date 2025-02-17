const User = require('../models/User');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find().populate('thoughts friends');
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a single user by ID
    async getSingleUser(req, res) {
        try {
            const user = await User.findById(req.params.id).populate('thoughts friends');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Update a user by ID
    async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a user by ID
    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};