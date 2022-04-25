import mongoose from 'mongoose';
import dealsSchema from "./dealsSchema.js";
const dealsModel = mongoose
    .model('DealModel', dealsSchema);
export default dealsModel;