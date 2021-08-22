const PORT = process.env.PORT || 3000;
const app = require('./app');
const syncAndSeed = require('./db/syncAndSeed');

syncAndSeed();

const server = app.listen(PORT, () =>
  console.log(`listening on port: ${PORT}`)
);
