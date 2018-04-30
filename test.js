var Promise = require("bluebird");
var request = require('request');
var config = require('./config');
var shopee = require('./helper/shopee');
var sync = require('./script/sync');
var syncShopeeToYahoo = sync.syncShopeeToYahoo;
var syncShopeeToYahooTest = sync.syncShopeeToYahooTest;
var ts = Math.floor(new Date().getTime() / 1000);
var key = {
    shopeeshopid: config.shopee.shopid,
    shopeepartnerid: config.shopee.partnerid,
    shopeesecret: config.shopee.apisecret
}
