const mongoos = require('mongoose');

const scoreSchema = mongoos.Schema({
    // _id: mongoos.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true,
        default : null
    },
    phone : {
        type : String,
        require : true, 
        default : 0
    },
    score : {
        type: Number,
        require : true,
        default : 0
    },
    timestamp: {
        type: Number,
        require: true,
    },

});
const score = mongoos.model("user", scoreSchema);

function add_score(user_score, name, phone){
    const new_score = new score({
        name : name,
        phone : phone,
        score : user_score,
        timestamp: Math.floor(Date.now() / 1000),
    });
    new_score.save((err, res) => {
        return true ;
    });
}

module.exports = {
    score: score,
    add_score : add_score
}
