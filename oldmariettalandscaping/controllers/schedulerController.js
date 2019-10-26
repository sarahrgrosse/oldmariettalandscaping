const db = require("../models");

//Methods for the Scheduler Controller//
module.exports = {
    findAllAppts: function(req, res) {
        db.Appt
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByCustId: function(req, res) {
        db.Appt
        .findByCustId(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Appt
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Appt
        .findApptAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => dbModel.remove())
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Appt
        .findById({ _id:req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};