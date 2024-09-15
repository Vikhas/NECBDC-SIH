var mongoose  =  require('mongoose');  


var newSchema = new mongoose.Schema({
    loc:{
        type:String
    },
    cont:{
        type:String
    },
    nid:{
        type:Number
    },
    disphome:{
        type:Boolean,
        default:false
    },
    tender:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('News',newSchema);