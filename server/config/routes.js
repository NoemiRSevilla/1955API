const users = require('../controllers/users');

module.exports = (app) => {
    app.get('/',(req,res) => users.index(req,res));
    app.get('/new/:name', (req,res) => users.new(req,res));
    app.get('/remove/:name', (req, res) => users.remove(req, res));
    app.get('/:name', (req, res) => users.show(req, res));

}