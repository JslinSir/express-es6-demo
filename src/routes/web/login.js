/*
 * @Date: 2019-12-06 14:50:29
 * @Author: jiangsenlin
 * @Description: 登录
 */

import assert from 'http-assert'
import AdminUser from "../../models/AdminUser";
import { _comparePwdSync } from '../../utils/bcrypt'
import { SECRET_KEY } from '../../config/secret'

const Login  = async(req, res, next) => {
    const { username, password } = req.body
    // 1.根据用户名找用户
    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')
    // 2.校验密码
    const isValid = _comparePwdSync(password, user.password)
    assert(isValid, 422, '密码错误')
   // 3.返回token
   const token = jwt.sign({ id: user._id }, SECRET_KEY)
   res.send({ token })

}

export default Login;

