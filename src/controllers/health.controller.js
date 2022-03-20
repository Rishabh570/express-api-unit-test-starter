exports.healthCheckSync = () => ('OK');

exports.healthCheckAsync = () => {
  return Promise.resolve('OK');
}