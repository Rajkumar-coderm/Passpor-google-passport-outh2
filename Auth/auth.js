const passport=require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

// this is google clint id and it is get to goole api cloud at credentials

const GOOGLE_CLIENT_ID="177346945285-h40vhvnmv5s6627nl6ml60r78b7c8ual.apps.googleusercontent.com"

// this is google clint secret token this also create creadentials create and use.
const GOOGLE_CLIENT_SECRET="ZA_S2heh0IgaiBMFObAE-bKQ";

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback", //this is link of our localhost server
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) { 
      return done(null, profile);
  }
));

passport.serializeUser(function(user,done){
    done(null,user)
});

passport.deserializeUser(function(user,done){
    done(null,user)
});