'use strict';
const model = require('../models/index');

exports.findAll = async function(req, res) {
    let limit = 10;   // number of records per page
    let offset = 0;

    model.user.findAndCountAll()
        .then((data) => {
            let page = req.params.page;      // page number
            let pages = Math.ceil(data.count / limit);
                offset = limit * (page - 1);
                
            model.user.findAll({                
                limit: limit,
                offset: offset,                
            })
                .then((users) => {
                    res.status(200).json({
                        'sucess': 1,
                        'data': users, 
                        'count': data.count, 
                        'pages': pages
                    });
                });            
        })
            .catch(function (err) {
                res.status(400).json({
                    'success': 0,
                    'messages': err.message,
                    'data': {},
                });
            });

    // try {        
    //     const user = await model.user.findAll({
    //         limit: 10
    //     });

    //     if (user.length !== 0) {
    //         res.json({
    //             'success': 1,
    //             'messages': '',
    //             'data': user
    //         })
    //     } else {
    //         res.json({
    //             'success': 0,
    //             'messages': 'EMPTY',
    //             'data': {}
    //         })
    //     }

    // } catch (err) {
    //     res.status(400).json({
    //         'success': 0,
    //         'messages': err.message,
    //         'data': {},
    //     })     
    // }    
};

exports.create = async function(req, res) {
    try {        
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
    } catch (err) {
        res.status(400).json({
            'success': 0,
            'messages': err.message,
            'data': {},
        })
      
    }
    
};

exports.findById = async function(req, res) {
    try {
        const user = await model.user.findOne({
            where: {
                id: req.params.id
            }
        });
            
        if (user) {
            res.json({
                'success': 1,
                'messages': 'User ditemukan',
                'data': user,
            })
        }         

    } catch (err) {
        res.status(400).json({
            'success': 0,
            'messages': err.message,
            'data': {},
        })
      
    }
};

exports.update = async function(req, res) {
    try {        
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
                'success': 1,
                'messages': 'User berhasil diupdate',
                'data': user,
            })
        }
    } catch (err) {
        res.status(400).json({
            'success': 0,
            'messages': err.message,
            'data': {},
        })
      
    }
    

};

exports.delete = async function(req, res) {
    try {
        const usersId = req.params.id;
        
        const users = await model.Todo.destroy({ where: {
            id: usersId
        }})

        if (users) {
            res.json({
                'success': 1,
                'messages': 'User berhasil dihapus',
                'data': users,
            })
        }
    } catch (err) {
        res.status(400).json({
            'success': 0,
            'messages': err.message,
            'data': {},
        })
      
    }
};