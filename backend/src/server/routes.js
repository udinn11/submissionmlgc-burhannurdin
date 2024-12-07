const postPredictHandler = require('../server/handler');
 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        maxBytes: 1024 * 1024,
        allow: 'multipart/form-data',
        multipart: true
      }
    }
  },
];
 
module.exports = routes;