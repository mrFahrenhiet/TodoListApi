var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    completed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Todo',todoSchema);