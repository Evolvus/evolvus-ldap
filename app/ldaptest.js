var ActiveDirectory = require('activedirectory');

var config = { url: 'ldap://evolvus.com',
               baseDN: 'dc=evolvus,dc=com',
               username: 'admin@evolvus.com',
               password: 'alm888#' }
var ad = new ActiveDirectory(config);

ad.authenticate(config.username, config.password, function(err, auth) {
  if (err) {
    console.log('ERROR: '+JSON.stringify(err));
    return;
  }
  
  if (auth) {
    console.log('Authenticated!'+auth);
  }
  else {
    console.log('Authentication failed!');
  }
});

var query = 'cn=*srihari*';
ad.findUsers(query, function(err, users) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }

  if ((! users) || (users.length == 0)) console.log('No users found.');
  else {
    console.log('findUsers: '+JSON.stringify(users));
  }
});

var username='mahendrar@evolvus.com';

ad.userExists(username, function(err, exists) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }

  console.log(username + ' exists: ' + exists);
});