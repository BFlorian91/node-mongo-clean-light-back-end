import User from '../models/register';
import bcrypt from 'bcrypt';


const findUser = (username, password) => {
  User.findOne({
    name: username
  }, (err, user) => {
    if (err) { throw new err };
    if (!user) { return false };
    console.log(user.password); /// DEBUG HERE !
    if (!bcrypt.compare(password, user.password)) { return false }
    // const verifyPass = await bcrypt.compare(password, user.password);
    // return verifyPass ? true : false;
    return true;
  })
}

module.exports = app => {
  app.get('/signin', (req, res) => {
    res.status(200).render('../view/login');
  });
  app.post('/signin', (req, res, next) => {
console.log("test here module export")
    if (findUser(req.body.username, req.body.password)) {
      console.log('you are logged');
      res.status(200).render('../view/index')
    }
    res.status(500).json({error: 'Shitty happen at login !!!'});
    console.log("not connected !!!");
  });
}