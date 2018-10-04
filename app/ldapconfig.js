module.exports = {

    url           : process.env.NODE_LDAP_URL || "ldap://domain.evolvus.com",
    baseDN        : process.env.NODE_LDAP_BASEDN || "dc=evolvus,dc=com"    
    //username      : process.env.NODE_LDAP_USERNAME || "mahendrar@evolvus.com",
    //password      : process.env.NODE_LDAP_PASSWORD || "padma@123",  

} 