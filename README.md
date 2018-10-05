ActiveDirectory for Node
=========

ActiveDirectory is an ldapjs client for authN (authentication) and authZ (authorization) for Microsoft Active Directory with range retrieval support for large Active Directory installations. Here are the key features

  - Authenticate
  - Authorization (via group membership information)
  - Nested groups support
  - Range specifier / retrieval support (http://msdn.microsoft.com/en-us/library/dd358433.aspx)
  - Automatic paging support (Active Directory results (MaxPageSize) limited to 1000 per request by default)
  - Recycle bin (tombstone) query support
  - Referral support
 
Required Libraries
-----------

ActiveDirectory uses the following additional node modules:

* [underscore] - a utility-belt library for JavaScript that provides a lot of the functional programming support
* [async] - Async utilities for node and the browser
* [ldapjs] - A pure JavaScript, from-scratch framework for implementing LDAP clients and servers in Node.js
* [bunyan](https://github.com/trentm/node-bunyan) - A simple and fast JSON logging module for node.js services

Installation
--------------

```sh
npm install activedirectory
```
Usage
--------------

```js
var ActiveDirectory = require('activedirectory');
var config = { url: 'ldap://domain.evolvus.com',
               baseDN: 'dc=evolvus,dc=com',
               username: 'username@domain.com',
               password: 'password' }
var ad = new ActiveDirectory(config);
```

The username and password specified in the configuration are what are used for user and group lookup operations.

Documentation
--------------

* [authenticate](#authenticate)

---------------------------------------

<a name="authenticate" />
### authenticate(username, password, callback)

Authenticates the username and password by doing a simple bind with the specified credentials.

__Arguments__

* username - The username to authenticate.
* password - The password to use for authentication.
* callback(err, authenticated) - A callback which is called after authentication is completed.

__Example__

```js
var ad = new ActiveDirectory(config);
var username = 'username@domain.com';//mahendrar@domain.com
var password = 'password';

ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR: '+JSON.stringify(err));
    return;
  }
  
  if (auth) {
    console.log('Authenticated!');
  }
  else {
    console.log('Authentication failed!');
  }
});
```

---------------------------------------

