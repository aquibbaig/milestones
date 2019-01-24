var mongoose = require('mongoose')

var milestone = mongoose.Schema({
  name:{type:String, required:true},
  date:{type:Date, default:Date.now}
})

var milestoneModel = mongoose.model('milestone', milestone)
module.exports = milestoneModel
