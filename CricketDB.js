const express = require("express");
const cors = require("cors");
const app = express();
const BodyParser = require('body-parser');
const MongoDb = require('mongodb');

const MongoClient = MongoDb.MongoClient;
const URL = "mongodb://localhost:/27017";

app.use(cors());
app.use(BodyParser.json());

app.post('/CricketGame',function(req,res){
    MongoClient.connect(URL, function(err,client){

        if (err) throw err;
        var db = client.db("Cricket")

        db.collection("Score").insertOne(req.body ,function(err,data){
            if (err) throw err;

            console.log(data)
            res.status(200).json({Message:"Success"});
            return;
        });

            client.close();
    })

});


app.get('/Man_Match',function(req,res){
    MongoClient.connect(URL, function(err,client){

        if (err) throw err;

        var db = client.db("Cricket");

        var useCursor = db.collection('film').find().toArray();

        useCursor.then((data)=>{
            res.json(data);
        })

            client.close();
    })
})

app.listen(6060);

