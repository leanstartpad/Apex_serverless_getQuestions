const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

exports.handle = function(e, ctx, cb) {
  if(e.name){
    const name = e.name;
    var params = {
      TableName: 'interview_questions',
      limit: 100,
      ScanIndexForward: true,
      KeyConditionExpression: "app_name = :name",
      ExpressionAttributeValues: {
          ":name": name
      }
    }
  }
  else{
    cb(new Error('Data Incomplete'),null);
  }
  docClient.query(params, function(err, data){
    if(err){
      cb(err, null);
    }
    else{
      cb(null, data);
    }
  })
}
