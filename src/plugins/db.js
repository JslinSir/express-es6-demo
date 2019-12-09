/*
 * @Date: 2019-12-06 10:52:02
 * @Author: jiangsenlin
 * @Description: this is description
 */
import mongoose from 'mongoose'

const dbAdress = `mongodb+srv://JsLinDBTest:JsLin1993@cluster0-fynbv.mongodb.net/test?retryWrites=true&w=majority` 

mongoose.connect(dbAdress, {
  useNewUrlParser: true
})

export default mongoose.connection
