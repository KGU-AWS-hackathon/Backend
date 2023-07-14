const express = require('express');
const baseResponse = require('../config/baseResponse');
const {successResponse, errResponse} = require('../config/response');
const Board = require('../../models/Board');

// get요청 작성
const output = {
    
};

//put, patch, post, delete 작성
const process = {
    upload : async (req, res) => {
        const board = new Board();
        board.upload(1, req.body);
    }
}

module.exports = {output, process};