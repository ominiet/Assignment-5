//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://omini:tut1@ds127034.mlab.com:27034/mongtut', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyA0tR5tPMk3yJk3-pJhwUn3UaSc47mES0E'
  },
  port: 8080
};