/*
 * Title: Routes
 * Description: Application Routes
 * Author: Zahid ( Webz Z Zahid )
 * Date: 15/06/2022
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
