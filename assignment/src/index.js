const Express = require('express');
var bodyParser = require('body-parser');
require ('./model/dbConnect')
const route = require('./route/route')

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});