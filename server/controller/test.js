

const test1 = async (ctx, next) => {
  // ctx.body = { value: '你真棒！' };
  // ctx.status = 200;
  // await next();
  // ctx.body = 123;
  // const startTime = Date.now();
  // console.log(ctx.request)
  // await next();
  // console.log(ctx.body)
  // console.log(Date.now() - startTime);
  console.log('ffff',ctx.fsConfig)
  ctx.body = ctx.fsConfig;
  ctx.status = 200;
};

// const getData = async (ctx) => {
//   const authInfoList = await getAuthInfoService();
//   ctx.body = authInfoList;
// }

module.exports = {
  test1
};
