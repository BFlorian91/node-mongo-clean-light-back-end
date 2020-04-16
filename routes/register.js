import bcrypt from 'bcrypt';
import User from '../models/register';

function validPassword(res, password, confirmPassword) {
  if (password !== confirmPassword) {
     return res.status(401).json({ error: 'password doesn\'t match' })
  }
  if (password.length < 8) {
    return res.status(401).json({ error: 'password is so short' }); 
  }
  return true;
}

module.exports = app => {

  app.post('/signup', (req, res, next) => {
    if (!validPassword(res, req.body.password, req.body.confirmPassword)) {
      throw new Error();
    }
    bcrypt.hash(req.body.password, 10, (err, res) => {
      console.log("it's good");
      if (err) { throw new Error(); }
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: res
      })
      user.save();
    });
  });

  app.get('/signup', (req, res) => {
    res.status(200).render('../view/register');
  });
}