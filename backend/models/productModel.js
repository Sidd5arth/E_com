const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"],
        trim:true
    },
    description:{
    type:String,
    required:[true,"plese enter the descriprtion"]
    },
    price:{
        type:Number,
        required:[true,"plese enter the product price"],
        maxLength:[8,"price cannot exeed  characters"]
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }    
        }
    ],
   
    category:{
        type:String,
        required:[true,"please enter product catagory"],
    },
    stock:{
        type:Number,
        required:[true,"please enter the product stock"],
        maxLength:[4,"stock canot exceed 4 characters"],
        default:1,
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type: mongoose.Schema.ObjectId,
                red:"user",
                required:true,
            },
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            }
        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        red:"user",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product",productSchema);