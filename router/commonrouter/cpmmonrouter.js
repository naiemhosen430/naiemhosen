const express = require('express');
const { 
    homecontroler, 
    portfoliocontroler, 
    templetescontroler, 
    contractcontroler,
    aboutcontroler,
    photoscontroler
} = require('../../controler/commoncontroler/commoncontroler');
const commonrouter = express.Router();

commonrouter.get("/", homecontroler)
commonrouter.get("/porfolio", portfoliocontroler)
commonrouter.get("/templetes", templetescontroler)
commonrouter.get("/contract", contractcontroler)
commonrouter.get("/about", aboutcontroler)
commonrouter.get("/photos", photoscontroler)

module.exports= {commonrouter};