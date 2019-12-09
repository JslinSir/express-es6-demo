/*
 * @Date: 2019-12-09 15:25:06
 * @Email: jiangsenlin@rainbow.com
 * @Author: jiangsenlin
 * @Description: this is description
 */

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    sex: { type: String },
    age: { type: Number }
})


export default mongoose.model('Test', schema)

