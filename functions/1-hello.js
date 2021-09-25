//domain/.netlify/functions/1-hello

// cb(null, {
//   statusCode: 200,
//   body: 'hello world',
// });

// const person = { name: 'Ram' };

exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: 'hello world',
  };
};
