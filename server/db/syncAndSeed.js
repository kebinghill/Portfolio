const db = require("./init");
const { Project } = require("./models/index");

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    Project.create({
      name: "Attack Of The Code",
      link: "http://attack-of-the-code.com/",
      headerImage: "../../public/images/attack-of-the-code.png",
    });
    Project.create({
      name: "Peer Support Resource",
      link: "https://peer-support-resource.herokuapp.com/",
      headerImage: "../../public/images/unsplashheader1.jpeg",
    });
    Project.create({
      name: "Finance App",
      link: "https://peer-support-resource.herokuapp.com/",
      headerImage: "../../public/images/unsplashheader1.jpeg",
    });
  } catch (error) {
    console.log("ERROR SEEDING DB", error);
  }
};

module.exports = syncAndSeed;
