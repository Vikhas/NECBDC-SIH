var mongoose  =  require('mongoose');  


var imgSchema = new mongoose.Schema({
    loc:{
        type:String
    },
    title:{
        type:String
    }
    
});

module.exports = mongoose.model('Images',imgSchema);