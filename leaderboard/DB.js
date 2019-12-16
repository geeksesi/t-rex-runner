const scoreSchema = mongoos.Schema({
    // _id: mongoos.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true,
        default : null
    },
    phone : {
        type : Number,
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

function add_score(score, name, phone){
    const new_score = new score({
        name : name,
        phone : phone,
        score : score,
        timestamp: Math.floor(Date.now() / 1000),
    });
}

module.exports = {
    score: score,
    add_score : add_score
}
