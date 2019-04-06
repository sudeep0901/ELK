var request = require("request");
var bodyparse = require('body-parser');

//get all the indiecs from Elasticsearch
request("http://localhost:9200/_cat/indices?v&pretty", function (error, response, body) {
    // console.log("Error:", error);
    // console.log("response:", response);
    // console.log("body:", body);

});


//get all the indices from Elasticsearch  & Schema
request("http://localhost:9200/products/?&pretty", function (error, response, body) {
    // console.log("Error:", error);
    // console.log("response:", response);
    // console.log("body:", body);

});

//get all the indices from Elasticsearch  & Schema
request("http://localhost:9200/products/mobiles/1", function (error, response, body) {
    // console.log("Error:", error);
    // console.log("response:", response);
    // console.log("Mobiles body:", body);

});

// request.post({
//     headers: {'content-type' : 'application/x-www-form-urlencoded'},
//     url:     'http://localhost/test2.php',
//     body:    "mes=heydude"
//   }, function(error, response, body){
//     console.log(body);
//   });


  // send a json file to elasticsearch to store data


//search params
request("http://localhost:9200/cutomers/_search?q=wyoing&pretty", function (error, response, body) {
    // console.log("Error:", error);
    // console.log("response:", response);
    console.log("Mobiles body:", body);

});


//search params
request("http://localhost:9200/cutomers/_search?pretty", function (error, response, body) {
    // console.log("Error:", error);
    // console.log("response:", response);
    console.log("Mobiles body:", body);

});