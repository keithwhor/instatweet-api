module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const router = new Nodal.Router();

  /* Middleware */
  /* executed *before* Controller-specific middleware */

  const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
  // const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
  // const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

  router.middleware.use(CORSMiddleware);
  // router.middleware.use(ForceWWWMiddleware);
  // router.middleware.use(ForceHTTPSMiddleware);

  /* Renderware */
  /* executed *after* Controller-specific renderware */

  const GzipRenderware = Nodal.require('renderware/gzip_renderware.js')

  router.renderware.use(GzipRenderware);

  /* Routes */

  const IndexController = Nodal.require('app/controllers/index_controller.js');
  const StaticController = Nodal.require('app/controllers/static_controller.js');
  const Error404Controller = Nodal.require('app/controllers/error/404_controller.js');

  /* generator: begin imports */

  const V1TweetsController = Nodal.require('app/controllers/v1/tweets_controller.js');
  const V1UsersController = Nodal.require('app/controllers/v1/users_controller.js');

  /* generator: end imports */

  router.route('/').use(IndexController);
  router.route('/static/*').use(StaticController);

  /* generator: begin routes */

  router.route('/v1/tweets/{id}').use(V1TweetsController);
  router.route('/v1/users/{id}').use(V1UsersController);

  /* generator: end routes */

  router.route('/*').use(Error404Controller);

  return router;

})();
