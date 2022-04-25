import mongoose from 'mongoose';
const schema = mongoose.Schema({
    airlines: String,
    discount: String,
    creditCard: String
}, {collection: 'deals'});
export default schema;