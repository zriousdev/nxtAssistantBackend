const admin = require('firebase-admin');
const serviceAccount = require('./bharatnxt-aae7b-firebase-adminsdk-fbsvc-f003caafcf.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;