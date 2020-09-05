const mongoose = require('mongoose')


require('../models/user');
const User = mongoose.model('User');

module.exports = {
    index: (req,res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.json(err));
    },
    new: (req,res) => {
        var user = new User();
        user.name = req.body.name
        user.save()
            .then( user => {
                res.json(user);
            })
            .catch( err => {
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.json(err);
            })
    },
    remove: (req, res) => {
        User.deleteOne({name: "${name}"})
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },
    show: (req,res) => {
        User.findOne({name: req.params.name})
            .then(user => res.json(user))
            .catch(err => res.json(err));
    }
}