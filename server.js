
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');           
const PORT = process.env.PORT || 5000;  



const app = express();
app.set('port', (process.env.PORT || 5000));
app.use(cors());
app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://RickLeinecker:COP4331Rocks@cluster0-4pisv.mongodb.net/COP4331?retryWrites=true&w=majority';
const dbName = 'app';
const client = new MongoClient(url);
client.connect();

// For Heroku deployment

/*
// Server static assets if in production
if (process.env.NODE_ENV === 'production') 
{
  // Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => 
 {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

*/


// Set header

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});



// ENDPOINT: Add Competition

app.post('/api/addCompetition', async (req, res, next) =>
{
  // incoming: Competition, Teams array,  requied services
  // outgoing: error
	
  const { team, req_services, start_time,end_time} = req.body;

  const newCompetition = {Teamobject:teamobject,req_services:req_services, start_time:start_time, end_time:end_time};
  var error = '';

  try
  {
    const db = client.db();
    const result = db.collection('Competition').insertOne(newCompetition);
  }
  catch(e)
  {
    error = e.toString();
  }

  var ret = { error: error };
  res.status(200).json(ret);
});



// ENDPOINT: Login

app.post('/api/login', async (req, res, next) => 
{
  // incoming: login, password
  // outgoing: id, firstName, lastName, error
	
 var error = '';

  const { login, password } = req.body;

  const db = client.db();
  const results = await db.collection('Users').find({Login:login,Password:password}).toArray();

  var id = -1;
  var fn = '';
  var ln = '';

  if( results.length > 0 )
  {
    id = results[0].UserId;
    fn = results[0].FirstName;
    ln = results[0].LastName;
  }

  var ret = { id:id, firstName:fn, lastName:ln, error:''};
  res.status(200).json(ret);
});



// ENDPOINT: addTeam

//my idea here is that we are going to pass an array with all the teams with their information filled out.

app.post('/api/addTeam', async (req, res) => 
{
  // incoming: team,
  // outgoing: results[], error

  var error = '';

  const { teamObject, compID } = req.body;


  const db = client.db();

  // I'm thinking that the competion is the collection here and that the team object is going to be a document
  const results = await db.collection('competition').updateone("teams",teamObject);
  
  var _ret = [];
  for( var i=0; i<results.length; i++ )
  {
    _ret.push( results[i].Card );
  }
  
  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});


// ENDPOINT: Add Required Services

// my idea here is that we are going to pass an array with all the req_services with their information filled out.

app.post('/api/addReq_Services', async (req, res) => 
{
  // incoming: req_Service object arrqay
  // outgoing: results[], error

  var error = '';

  const { req_ServiceObject } = req.body;


  const db = client.db();

  // I'm thinking that the competion is the collection here and that the team object is going to be a document
  const results = await db.collection('competition').updateone("req_services",req_ServiceObject);
  
  var _ret = [];
  for( var i=0; i<results.length; i++ )
  {
    _ret.push( results[i].Card );
  }
  
  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});


// ENDPOINT: Add Instances

// my idea here is that we are going to pass an array with all the instances with their information filled out.
// Using the team name we can find the team we are looking for and update it

app.post('/api/addInstances', async (req, res) => 
{
  // incoming: instances object arrqay
  // outgoing: res:200, error

  var error = '';

  const { InstanceObject , tname } = req.body;


  const db = client.db();

  await db.collection('competition').updateone({"teams.name":tname}, {$set:{ 'teams.$.instances':InstanceObject}});
  
  var _ret = [];
  for( var i=0; i<results.length; i++ )
  {
    _ret.push( results[i].Card );
  }
  
  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});



db.test_invoice.update({user_id : 123456 , "items.item_name":"my_item_one"} , {$inc: {"items.$.price": 10}})

// Basic server stuff
app.listen(PORT, () => 
{
  console.log('Server listening on port ' + PORT);
});


