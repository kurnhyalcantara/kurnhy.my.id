const admin = require('firebase-admin');
const { privateKey } = JSON.parse(
  process.env.FIREBASE_PRIVATE_KEY || '{ privateKey: null }'
);

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: privateKey,
      project_id: 'kurnhy-blog'
    }),
    databaseURL: 'https://kurnhy-blog.firebaseio.com'
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

module.exports = admin.database();
