import mongoose from 'mongoose';
const schema = mongoose.Schema({
    passengers : String,
    origin: String,
    destination: String,
    date: String
}, {collection: 'initial'});
export default schema;