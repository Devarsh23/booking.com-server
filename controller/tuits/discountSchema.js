import mongoose from 'mongoose';
const schema = mongoose.Schema({
    airlines : String,
    discount: String,
}, {collection: 'discount'});
export default schema;