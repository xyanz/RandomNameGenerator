// Required resources always go first
// TODO: [1] bring in the express library
const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const namesRouter = require('./routes/names');
const monthsRouter = require('./routes/months');
const PORT = process.env.PORT || 3000;
const app = express();

//Set Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use( express.static( path.join( __dirname, 'public' )));

// Set up logging
app.use(logger('dev'));

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

/* ROUTES */
app.use('/names', namesRouter);
app.use('/months', monthsRouter);


app.get('/', (req, res) => {
  res.render('index')
});

//Set up a listener on PORT
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});
