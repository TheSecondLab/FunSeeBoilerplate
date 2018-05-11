const testRouter = router => ([
  router.get('/zx', 'test.test1', { sd: '1' }),
  router.post('/god')
]);

module.exports = testRouter;
