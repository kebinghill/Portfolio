const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/kgil'
);

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
  } catch (error) {
    console.log('ERROR SEEDING DB', error);
  }
};

module.exports = syncAndSeed;
