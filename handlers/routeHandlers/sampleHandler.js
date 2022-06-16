/*
 * Title: Sample Handle
 * Description: Sample Handle
 * Author: Zahid ( Webz Z Zahid )
 * Date: 15/06/2022
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    message: 'This is a sample url',
  });
};

module.exports = handler;
