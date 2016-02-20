module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateUser extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016022003261952;
    }

    up() {

      return [
        this.createTable("users", [{"name":"email","type":"string","properties":{"unique":true}},{"name":"password","type":"string"},{"name":"username","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("users")
      ];

    }

  }

  return CreateUser;

})();
