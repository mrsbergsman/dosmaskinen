const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    
    time: { type: String, required: true },
    medicine: { type: String, required: true },
    message: { type: String, required: true },
    record:{ type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('post', postSchema);

