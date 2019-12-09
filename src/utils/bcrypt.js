/*
 * @Date: 2019-12-06 14:06:14
 * @Author: jiangsenlin
 * @Description: bcrypt 加密解密
 */

const bcrypt = require('bcrypt');
const saltRounds = 10;


 /**
  * @des 接受到的password进行加密
  * @param {*} password 
  */
const _doCryptoSync = password =>  bcrypt.hashSync(password, saltRounds)


/**
 * 
 * @param {*} fromUser  用户输入的铭文密码
 * @param {*} fromDatabase  从数据库中查询的 加密密码
 */
const _comparePwdSync = (fromUser, fromDatabase) => bcrypt.compareSync(fromUser, fromDatabase)



export default {
    _doCryptoSync,
    _comparePwdSync
}