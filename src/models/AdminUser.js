/*
 * @Date: 2019-12-06 14:01:08
 * @Author: jiangsenlin
 * @Description: this is description
 */
const mongoose = require('mongoose')
import { _doCryptoSync } from '../utils/bcrypt'

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false,
    set(val) {
      return _doCryptoSync(val)
    }
  },
})


export default mongoose.model('AdminUser', schema)

