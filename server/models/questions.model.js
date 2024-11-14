import mongoose from "mongoose";

/** Questions Schema */
const { Schema } = mongoose

const questionModel = new Schema({
    questions: {type: Array, default:[]},
    answers: {type: Array, default:[]},
    creatAt: {type: Date, default: Date.now},
    quiz: {type: Object,}
})

export default mongoose.model('Question' , questionModel);
