const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors')

const app = express();
const PORT =process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


    const db = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'react_users'
    });

    db.connect((err) => {
        if(err) {
            console.log('Error connecting to Mysql:', err);
        } else{
            console.log('Connected to Mysql');
        }
    });
app.post('/login', (req,res) =>{
    const {email, password} = req.body;

    const query = 'SELECT * FROM users WHERE email=? AND password=? ';
    db.query(query, [email, password], (err, results) =>{
        if(err){
            console.log('Error during login query:', err);
            res.status(500).json({success:false, message:'Internal Server Error'});
        } else {
            if (results.length > 0) {
                res.json({success:true, message:'Login successful'});
            } else{
                res.status(401).json({success:false, message:'Invalid credentials'});
            }
        }
    });
});

app.listen(PORT, () =>{
    console.log('Sever is running on http://localhost:${PORT}');
});