import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/crudwithredux';

mongodb.MongoClient.connect(dbUrl,function(err,db){
    app.get('/api/movies',(req,res) => {
        db.collection('movies').find({}).toArray((err,movies) => {
            res.json({ movies });
        });
    });
    app.use((req,res)=>{
        res.status(404).json({
            errors:{
                global:"Still working on it.Please try again later when we implement it."
            }
        });
    });
    app.listen(5000,() => console.log('服务开启，运行端口5000'));
});