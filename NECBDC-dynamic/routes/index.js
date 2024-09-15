const express = require('express');
const router = express.Router();
var multer      = require('multer');  


const nodemailer=require('nodemailer');
var app = express();

const News = require('../models/news');
const Images = require('../models/gallery');
const Visitor = require('../models/visitor');

var storage = multer.diskStorage({  
    destination:(req,file,cb)=>{  
    cb(null,'public/assets/uploads/');  
    },  
    filename:(req,file,cb)=>{  
    cb(null,file.originalname);  
    }  
    }); 
    
    
var uploads = multer({storage:storage});  


router.get('/',async(req,res)=>{


    let visitors = await Visitor.findOne({name: 'localhost'});


    if(visitors == null) {
          
        // Creating a new default record
        const beginCount = new Visitor({
            name : 'localhost',
            count : 1
        });
  
        // Saving in the database
        beginCount.save();
    }
    else{
          
        // Incrementing the count of visitor by 1
        visitors.count += 1;
  
        // Saving to the database
        visitors.save()
  
    }

    var news = await News.find({disphome:true,tender:false});
    var tenders = await News.find({disphome:true,tender:true});
    
    console.log(news);
    
    res.render('home',{news:news,tenders:tenders});
});


router.get('/admin',async(req,res)=>{
    var news = await News.find({tender:false});
    // console.log(news);
    res.render('admin',{news:news});
});

router.post('/changeEntry/:id',async(req,res)=>{
    var id = req.params.id;
    var check=req.body.checky;
    console.log(check);
    var allnews = await News.find({tender:false});
    const news = await News.findOne({ _id: id });
    if(check=="on"){
        news.disphome=true;
        news.save();
    }
    else{
        news.disphome=false;
        news.save();
    }
    // console.log(news);
    
    res.redirect('/admin');
});


router.post('/delete/:id',async(req,res)=>{
    var id = req.params.id;
    await News.deleteOne({ _id: id });
    res.redirect('/admin');
});


router.get('/addnews',(req,res)=>{
    res.render('addnews');
});

router.get('/addimg',(req,res)=>{
    res.render('addimg');
});



router.post("/uploadfile", uploads.single("uploadfile"),(req, res) => {
    // console.log(req.file.filename);
    // console.log(req.body.content);

    let news = new News();
    news.cont=req.body.content;
    news.loc="/uploads/"+req.file.filename;
    news.save();
    res.redirect('/admin');
});

router.post("/uploadimg", uploads.single("uploadfile"),(req, res) => {
    // console.log(req.file.filename);
    // console.log(req.body.content);

    let imgs = new Images();
    imgs.title=req.body.title;
    imgs.loc="/uploads/"+req.file.filename;
    imgs.save();
    res.redirect('/admin');
});


router.get('/blog',(req,res)=>{
    res.render('blog');
});


router.get('/gallery',async(req,res)=>{
    var images = await Images.find();
    res.render('gallery',{imgs:images});
});


router.post("/submit",(req,res)=>{

    const {
        name,
        email,
        subject,
        message
    } =req.body;

    console.log(req.body.name + email + subject + message);

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'sample185b@gmail.com',
            pass:'strongkey'
        }
    })
    const mailOptions = {
        from:email,
        to:'sample185b@gmail.com',
        subject:'message from '+email +':' + subject,
        text:message
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            console.log('Email sent :'+info.response);
            console.log('message sent successfully');
            // req.flash("success_message", "Your message has been sent. Thank you!");
            // res.redirect('/');
            // updateDiv();
            res.redirect('/');
            
            
        }
    })


})




module.exports = router;