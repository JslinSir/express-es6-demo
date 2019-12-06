/*
 * @Date: 2019-12-06 15:40:50
 * @Author: jiangsenlin
 * @Description: admin route 
 */


import express from 'express'
import UserFn from './users'

const router = express.Router();

const AdminApi = (app) => {

  // 用户列表
  router.get('/user', UserFn)


  // web Api 路由
  app.use('/admin/api', router)

}

export default AdminApi