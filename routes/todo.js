var express = require('express');
var Todo = require('../models/todo');
var app = express();

app.post('', (req,res) => {
    const todo = new Todo({
        name: req.body.name
    });
    todo.save().then(resData => {
        res.json(resData)
    }).catch(err => {
        res.status(401).json(err)
    })
});
app.get('',(req,res) => {
   const todoFetch =  Todo.find();
   var todo;
   todoFetch.then(results => {
       todo = results;
       res.json({
            message: 'Todos found',
            todo: todo
       })
   }).catch(() => {
       res.status(401).json({
           message: 'Todos not found'
       })
   })
});
app.delete('/:id', (req,res) => {
    Todo.deleteOne({_id: req.params.id}).then(result => {
        res.json({
            message: "Deleted!",
            result: result
        })
    }).catch(err => {
        res.json({
            message: "Cannot be deleted",
            error: err
        })
    })
});
app.put('/:id', (req,res) => {
    const todo = new Todo({
        _id: req.params.id,
        name: req.body.name
    });
    Todo.updateOne({_id: req.params.id},todo).then(result => {
        res.json({
            message: "Updated",
            result: result
        });
    })
})

module.exports = app