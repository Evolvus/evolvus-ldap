var ActiveDirectory = require('activedirectory');
var ldapconfig = require('./ldapconfig.js');
const _ = require("lodash");
const debug = require("debug")("evolvus-ldap");

var config = {
  url: ldapconfig.url,
  baseDN: ldapconfig.baseDN
  //username: ldapconfig.username,
  //password: ldapconfig.password
};
var ad = new ActiveDirectory(config);

module.exports = (router) => {

  router.route("/ldapauth/")
    .post((req, res, next) => {
      const response = {
        "status": "200",
        "description": "",
        "data": {}
      };
      try {
        let object = _.pick(req.body, ["username", "password"]);
        ad.authenticate(object.username, object.password, function (err, auth) {
          if (err) {
            console.log('ERROR: ' + JSON.stringify(err));
            response.status = "401";
            response.description = `${err}`;
            res.status(401).send(response);
          }

          else if (auth) {
            console.log('Authenticated!');
            response.description = `Authenticated`;
            response.data = auth;
            res.status(200).send(response);
          }
          else {
            console.log('Authentication failed!');
            response.status = "401";
            response.description = `Authentication failed!`;
            response.data = auth;
            res.status(401).send(response);
          }
        });

      } catch (e) {
        response.status = 401;
        response.description = `Authentication failed!`;
        response.data = e;
        res.status(401).send(response);
      }
    });
}   