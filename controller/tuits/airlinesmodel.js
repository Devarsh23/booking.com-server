import mongoose from 'mongoose';
import airlinesSchema from "./airlinesSchema.js";
const airlinemodels = mongoose
    .model('AirlineModel', airlinesSchema);
export default airlinemodels;