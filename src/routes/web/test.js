/*
 * @Date: 2019-12-09 15:27:18
 * @Author: jiangsenlin
 * @Description: test
 */


import assert from 'http-assert'
import Test from "../../models/Test";


const TestFn =  (req, res, next) => {
    const test = new Test({
        name: 'jiangsenlin',
        sex: 'man',
        age: 18
    });
    test.save(function (err) {
        if (err) console.log(err)
    })
    res.send(test)
}

export default TestFn;
