'use strict';

const hearts = [
  '💕', '💞', '💓', '💗', '💖', '💝'
];

module.exports.rank = async (event, context, callback) => {

  const rank = event.queryStringParameters.rank;
  const rankHeart = hearts[rank > hearts.length ? hearts.length - 1 : rank];

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: rankHeart,
    }, null, 2),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
