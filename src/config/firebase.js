const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

const localServiceAccountPath = path.join(
  __dirname,
  'bharatnxt-aae7b-firebase-adminsdk-fbsvc-f003caafcf.json',
);
const serviceAccountPath = process.env.RENDER
  ? '/etc/secrets/service-account.json'
  : localServiceAccountPath;

let firebaseAdmin = null;

try {
  if (fs.existsSync(serviceAccountPath)) {
    const serviceAccount = require(serviceAccountPath);
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }
    firebaseAdmin = admin;
  } else {
    console.warn(
      `Firebase Admin credentials not found at ${serviceAccountPath}.`,
    );
  }
} catch (error) {
  console.warn(
    'Firebase Admin failed to initialize. Guest mode will work.',
    error.message,
  );
}

module.exports = firebaseAdmin;
