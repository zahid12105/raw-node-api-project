/*
 * Title: notFoundHandle
 * Description: Sample Handle
 * Author: Zahid ( Webz Z Zahid )
 * Date: 15/06/2022
 */

// module scaffolding
const handler = {};

handler.notFoundHandle = (requestProperties, callback) => {
  callback(404, {
    message: 'Your requested URL was not found!',
  });
};

module.exports = handler;
