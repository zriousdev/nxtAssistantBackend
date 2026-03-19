const admin = require('firebase-admin');

let serviceAccount;

if (process.env.RENDER) {
  serviceAccount = require('/etc/secrets/service-account.json');
} else {
  serviceAccount = require('./bharatnxt-aae7b-firebase-adminsdk-fbsvc-f003caafcf.json');
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;