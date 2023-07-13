const express = require('express');
const baseResponse = require('../config/baseResponse');
const {successResponse, errResponse} = require('../config/response');
const db = require('../config/database');

// get요청 작성
const output = {
    home : async (req, res) => {
        res.send(successResponse(baseResponse.SUCCESS));
    }
};

//put, patch, post, delete 작성
const process = {

}

module.exports = {output, process};