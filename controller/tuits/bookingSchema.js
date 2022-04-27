import mongoose from 'mongoose';
const schema = mongoose.Schema({
    user: String,
    booking: {

        originName: String,
        originCode: String,
        destinationName: String,
        destinationCode: String,
        durationInMinutes: Number,
        stopCount: Number,
        departure: String,
        arrival: String,
        airlineName: String,
        price: String,
        flightNumber: String
    }

}, {collection: 'bookings'});
export default schema;