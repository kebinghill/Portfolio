const PORT = process.env.PORT || 3000;
const app = require('./app');
const syncAndSeed = require('./db/index');

syncAndSeed();

const server = app.listen(PORT, () =>
  console.log(`listening on port: ${PORT}`)
);
