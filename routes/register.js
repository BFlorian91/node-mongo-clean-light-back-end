module.exports = app => {
  app.get('/signup', (req, res) => {
    res.status(200).render('../view/register.ejs');
  });
}