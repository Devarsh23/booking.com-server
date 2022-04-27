import mongoose from 'mongoose';
import bookingSchema from "./bookingSchema.js";
const bookingsModel = mongoose
    .model('BookingsModel', bookingSchema);

export default bookingsModel;