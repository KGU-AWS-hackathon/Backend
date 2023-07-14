const express = require('express');
const baseResponse = require('../config/baseResponse');
const {successResponse, errResponse} = require('../config/response');
const KickBoard = require('../models/KickBoard');

// get요청 작성
const output = {
    kickBoardList : async (req, res) => {
        const kickBoard = new KickBoard();
        const data = await kickBoard.kickBoardList();
        res.json(data);
    }
};

//put, patch, post, delete 작성
const process = {


}

module.exports = {output, process};