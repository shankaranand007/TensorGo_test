'use strict';
var async = require('async');
const util = require("util");
const output = require('../helper/api');
const userModel = require('../model/user.model');
const moment = require('moment');

class UserController {
    constructor(con) {
        this.config = con;
    }

    exportCsv(req, res) {
        res.set('Content-Type', 'application/octet-stream');
        // res.send(<your data>);

        try {
            new Promise((resolve, reject) => {
                userModel.find()
                    .exec((err, data = Array) => {
                        if (err) reject(output.invalid(req, res, err))
                        else {

                            // let csvContent = "data:text/csv;charset=utf-8,";
                            let csvContent = "data:text/csv;charset=utf-8,"
                                + data.map(e => e + ',').join("\n");
                            // data.forEach(function(rowArray) {
                            //     let row = rowArray.join(",");
                            //     csvContent += row + "\r\n";
                            // });
                            res.set('Content-Type', 'application/octet-stream');
                            res.attachment('export.csv');
                            resolve(res.status(200).send(csvContent))
                        }
                    })
            })
        } catch (ex) { output.serverError(req, res, ex) }
    }
    addUser() {
        var options = {
            uri: 'https://gorest.co.in/public-api/users',
            json: true 
        };

        var rp = require('request-promise');
        rp(options)
            .then(function (data) {
                userModel.insertMany(data['data'])
                    .exec((err, data) => {
                        if (err) { console.log(err) }
                        else { console.log(data) }
                    })
            })
            .catch(function (err) {
            });
    }
    getUser(req, res) {

        try {
            new Promise((resolve, reject) => {
                userModel.find()
                    .exec((err, data) => {
                        if (err) reject(output.invalid(req, res, err))
                        else {
                            resolve(res.json({ code: 200, data: data }))
                        }
                    })
            })
        } catch (ex) { output.serverError(req, res, ex) }
    }
    updateUser(req, res) {
        try {
            new Promise((resolve, reject) => {
                userModel.findOneAndUpdate({ id: req.body.id }, { $set: req.body })
                    .exec((err, data) => {
                        if (err) reject(output.invalid(req, res, err))
                        else resolve(output.ok(req, res, data, "updated", 0))
                    })
            })
        } catch (ex) { output.serverError(req, res, ex) }
    }
}


module.exports = new UserController();