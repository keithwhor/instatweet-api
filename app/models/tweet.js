module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  const User = Nodal.require('app/models/user.js');

  class Tweet extends Nodal.Model {}

  Tweet.setDatabase(Nodal.require('db/main.js'));
  Tweet.setSchema(Nodal.my.Schema.models.Tweet);

  Tweet.joinsTo(User, {multiple: true});

  return Tweet;

})();
