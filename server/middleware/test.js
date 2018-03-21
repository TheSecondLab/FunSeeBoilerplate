module.exports = () => (async, next) => {
  console.log('yeah');
  return next();
}