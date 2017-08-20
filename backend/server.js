import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const dbUrl = 'mongodb://admin:redux2017@ds145263.mlab.com:45263/redux-crud';

function validate(data){
    let errors = {};
    if(data.title === '') errors.title = "请填入电影片名";
    if(data.cover === '') errors.cover = "请填入电影海报图片地址";
    const isValid = Object.keys(errors).length === 0;
    return {errors,isValid};
}

mongodb.MongoClient.connect(dbUrl,function(err,db){
    app.get('/api/movies',(req,res) => {
        db.collection('movies').find({}).toArray((err,movies) => {
            res.json({ movies });
        });
    });
    app.post('/api/movies',(req,res)=>{
        const{errors,isValid}=validate(req.body);
        if(isValid){
            const{title,cover} = req.body;
            db.collection('movies').insert({title,cover},(err,result)=>{
                if(err){
                    res.status(500).json({errors:{global:"哪里出了问题"}});
                }else{
                    res.json({movie:result.ops[0]});
                }
            });
        }else{
            res.status(400).json({errors});
        }
    });

    app.put('/api/movies/:_id',(req,res)=>{
        const{errors,isValid} = validate(req.body);
        if(isValid){
            const {title,cover} = req.body;
            db.collection('movies').findOneAndUpdate(
                {_id:new mongodb.ObjectId(req.params._id)},
                {$set:{title,cover}},
                {returnOriginal:false},
                (err,result)=>{
                    if(err){
                        res.status(500).json({
                            errors:{ global: err }
                        });
                        return;
                    }
                    res.json({ movie: result.value });
                }
            );
        }else{
            res.status(400).json({errors});
        }
    });

    app.get('/api/movies/:_id', (req, res) => {
        db.collection('movies').findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, movie) => {
            res.json({ movie });
        })
    });

    app.delete('/api/movies/:_id', (req, res) => {
        db.collection('movies').deleteOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, r) => {
            if (err) { res.status(500).json({ errors: { global: err }}); return; }
            res.json({});
        })
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