'use strict';
const model = require('../models/index');

exports.findAll = async function(req, res) {
    const user = await model.user.findAll({});
    if (user.length !== 0) {
        res.json({
            'success': 1,
            'messages': '',
            'data': user
        })
    } else {
        res.json({
            success: 0,
            'messages': 'EMPTY',
            'data': {}
        })
    }
};

exports.create = function(req, res) {
    const {
        name,
        email,
        gender,
        phoneNumber
    } = req.body;

    const user = await model.user.create({
        name,
        email,
        gender,
        phone_number: phoneNumber
    });

    if (user) {
        res.status(201).json({
            'success' : 1,
            'messages': 'User berhasil ditambahkan',
            'data': user,
        })
    }
};

exports.findById = function(req, res) {
    User.findById(req.id, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update = function(req, res) {
    const userId = req.id;
    const {
        name,
        email,
        gender,
        phoneNumber
    } = req.body;
    
    const user = await model.user.update({
        name,
        email,
        gender,
        phone_number: phoneNumber
    }, {
        where: {
            id: userId
        }
    });
    
    if (user) {
        res.json({
            'status': 'OK',
            'messages': 'User berhasil diupdate',
            'data': user,
        })
    }

};

exports.delete = function(req, res) {
    User.delete( req.id, function(err, user) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'User successfully deleted' });
    });
};