'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      'Hello from serverless'
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
};
