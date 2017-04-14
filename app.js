const express       = require('express');
const path          = require('path');
const favicon       = require('serve-favicon');
const logger        = require('morgan');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const layouts       = require('express-ejs-layouts');
const mongoose      = require('mongoose');
const session       = require('express-session');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FbStrategy    = require('passport-facebook').Strategy;
const bcrypt        = require('bcrypt');
const dotenv        = require('dotenv');
const cors          = require('cors');

dotenv.config();
mongoose.connect(process.env.MONGODB_URI);

// mongoose.connect('mongodb://localhost/my-final-project');

const User          = require('./models/user-model');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Final Project Crunch Time';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
// app.use(cors());
if (process.env.NODE_ENV !== 'production') {
   app.use(cors({
     credentials: true,
     origin: ['http://localhost:4200', 'http://localhost:8000']
   }));
 }

app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((userId, cb) => {
  User.findById(userId, (err, user) => {
    cb(err, user);
  });
});


passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      next(err);
    } else if (!user) {
      next(null, false, { message: "Incorrect username" });
    } else if (!bcrypt.compareSync(password, user.encryptedPassword)) {
      next(null, false, { message: "Incorrect password" });
    } else {
      next(null, user);
    }
  });
}));


// passport.use(new FbStrategy({
//     clientID: process.env.FB_CLIENT_ID,
//     clientSecret: process.env.FB_CLIENT_SECRET,
//     callbackURL: process.env.HOST_ADDRESS + '/auth/facebook/callback'
//   },
//   saveSocialUser // <──◉ social login callback
// ));
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate(..., function(err, user) {
//       if (err) { return done(err); }
//       done(null, user);
//     });
//   }
// ));

// passport.use(new FbStrategy({
//   clientID: "1981902438708397",
//   clientSecret: "fc5256cdf3016ea2bebf9bd499027eb3",
//   callbackURL: "http://localhost:3000/auth/facebook/callback"
// }, (accessToken, refreshToken, profile, done) => {
//   done(null, profile);
// }));

const passportSetup = require('./config/passport');
passportSetup(passport);

const authRoutes = require('./routes/auth-routes');
app.use('/', authRoutes);

const projectsApi = require('./routes/projects-api');
app.use('/api', projectsApi);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/public/notindex.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
