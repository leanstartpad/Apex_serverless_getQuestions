const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

exports.handle = function(e, ctx, cb) {
  var params = {
    TableName: 'interview_questions',
    limit: 100
  }

  docClient.scan(params, function(err, data){
    if(err){
      cb(err, null);
    }
    else{
      cb(null, data);
    }
  })
}
