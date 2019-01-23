var mongoose = require('mongoose')

var task = new mongoose.Schema({
  name: {type:String, required:true},
  date: {type:Date, default: Date.now}
})

var taskModel = mongoose.model('task', task)
module.exports = taskModel
