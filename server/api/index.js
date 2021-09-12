const router = require('express').Router();

//JWT TESTING POSTS AND POST ROUTE

const posts = [
  {
    username: 'Kevin',
    title: 'Post 1',
  },
  {
    username: 'Kyle',
    title: 'Post 2',
  },
];

router.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

router.post('/login', (req, res) => {
  //Authenticate User

  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

// router.post('/apple', (req, res) => {
//   //Authenticate User

//   const jwtToken = jwt.sign({}, process.env.APPLE_PRIVATE_KEY, {
//     algorithm: 'ES256',
//     expiresIn: '180d',
//     issuer: process.env.APPLE_TEAM_ID,
//     header: {
//       alg: 'ES256',
//       kid: process.env.APPLE_KEY_ID,
//     },
//   });
//   console.log(jwtToken);
//   res.json({ accessToken: accessToken });
// });

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
//END OF TESTING

//Router Error
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
