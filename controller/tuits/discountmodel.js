import mongoose from 'mongoose';
import discountSchema from "./discountSchema.js";
const discountModel = mongoose
    .model('discountModel', discountSchema);
export default discountModel;