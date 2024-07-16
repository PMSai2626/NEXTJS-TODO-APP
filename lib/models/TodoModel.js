const { default: mongoose } = require("mongoose");

// const { required } = require("nodemon/lib/config");

const schema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    },
},{
    timeStamp:true
})

const TodoModel = mongoose.models.todo || mongoose.model('todo', schema)

export default TodoModel