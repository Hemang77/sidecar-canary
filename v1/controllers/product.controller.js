// external imports
// const moment = require('moment');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const axios = require('axios');
const uuid = require('uuid')


//internal imports
const constant = require('../../config/constant');
const Products = require('../../models/product.model');



let product = () => { };

// add API 
product.add = async (req, res) => {
    try {
        // console.log(req.body);
        console.log(`URC ---> ${req.body.headers.URC}`)
        let products = new Products();
        products.productName = req.body.params.productName;
        products.qty = req.body.params.qty;
        products.sku = req.body.params.sku;
        const response = await products.save();
        res.status(200).send({
            status: constant.statusCodes.SUCCESS,
            error: false,
            data: response
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: constant.statusCodes.FAIL,
            message: error.message,
            error: true,
            data: {}
        });
    };
};

// get API 
product.get = async (req, res) => {
    try {
        console.log('URC--->', req.headers.urc);
        // console.log(`URC ---> ${req.headers.URC}`)
        let products = await Products.findOne({ sku: req.params.sku.toString() });
        res.status(200).send({
            status: constant.statusCodes.SUCCESS,
            error: false,
            data: products
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: constant.statusCodes.FAIL,
            message: error.message,
            error: true,
            data: {}
        });
    };
};

module.exports = product;