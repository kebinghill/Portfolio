const db = require('./init');
const { Project } = require('./models/index');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    Project.create({
      name: 'AttackOfTheCode',
      link: 'https://attack-of-the-code.com/',
      headerImage: 'unsplashheader1.jpeg',
    });
  } catch (error) {
    console.log('ERROR SEEDING DB', error);
  }
};

module.exports = syncAndSeed;
