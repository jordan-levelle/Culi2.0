import admin from '../config/firebase.js';

const decodeToken = async (token) => {
  const decodedToken = await admin.auth().verifyIdToken(token);
  return decodedToken;
};

export default decodeToken;
