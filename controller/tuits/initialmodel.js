import mongoose from 'mongoose';
import initialSchema from './initialSchema.js'
const initialModel = mongoose
    .model('InitialModel', initialSchema);
export default initialModel;