var mongoose  = require('mongoose')

var weekList = new mongoose.Schema({
  mon:{type:String, required:true},
  tue:{type:String, required:true},
  wed:{type:String, required:true},
  thu:{type:String, required:true},
  fri:{type:String, required:true},
  sat:{type:String, required:true},
  sun:{type:String, required:true}
})

var weekListModel = mongoose.model('weekList', weekList)
module.exports = weekListModel
