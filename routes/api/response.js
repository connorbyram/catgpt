const express = require('express');
const router = express.Router();
const responseCtrl = require('../../controllers/api/response')

router.get('/', responseCtrl.index);