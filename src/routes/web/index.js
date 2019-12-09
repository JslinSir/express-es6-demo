/*
 * @Date: 2019-12-06 14:42:41
 * @Author: jiangsenlin
 * @Description: this is description
 */
import express from 'express'
import LoginFn from './login'
import TestFn from './test'

const router = express.Router();

const WebApi = (app) => {


  router.get('/', function (req, res, next) {

    res.send('web api')
  })

  // test
  router.get('/test', TestFn)
  // 登录
  router.post('/login', LoginFn)


  // web Api 路由
  app.use('/web/api', router)

}

export default WebApi
