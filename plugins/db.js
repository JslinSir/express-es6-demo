/*
 * @Date: 2019-12-06 10:52:02
 * @Author: jiangsenlin
 * @Description: this is description
 */
module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true
  })

  // require('require-all')(__dirname + '/../models')
}