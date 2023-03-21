import app from './server.js';
import connection from './config/db.js';

const PORT = process.env.PORT || 3000;

connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
