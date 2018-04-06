
const path = require('path');
/**
 * ------------------------------------------------------------------
 * port<number>: node启动端口号
 * ------------------------------------------------------------------
 * middleware<array of optionObj>: 配置FunSee所使用的第三方中间件
 * optionObj: {
 *  name<string>: 中间件名字, npm包名
 *  param<any || array>: 传入中间件的参数, 如果是array的话，将会把数组的每一项依次传入中间件
 *  needApp<bool>: 是否需要app传入中间件， 需要的话会再中间件的使用方法最后传入app
*   desc<string>: 打印日志用
 * }]
 * ------------------------------------------------------------------
 *  customMiddleware<array of optionObj>: 配置FunSee所使用的自定义中间件
 *  optionObj: {
 *   name<string>: 中间件名字, npm包名
 *   param<any || array>: 传入中间件的参数, 如果是array的话，将会把数组的每一项依次传入中间件
 *   needApp<bool>: 是否需要app传入中间件， 需要的话会再中间件的使用方法最后传入app，
 *   desc<string>: 打印日志用, 不传则使用name代替
 *  }]
 * ------------------------------------------------------------------
 */
module.exports = {
  customMiddleware: [{
    name: 'test',
    sort: '2300'
  }],
  log: {
    silly: path.resolve(__dirname, '../logs/test.log')
  }
};
