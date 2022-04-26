import mongoose from 'mongoose';
const schema = mongoose.Schema({
    legs:
        {
            origin: {
                originName: String,
                originCode: String
            },
            destination: {
                destinationName: String,
                destinationCode: String
            },
            durationInMinutes: String,
            stopCount: Number,
            departure: String,
            arrival: String,
            carriers: {
                marketing: {
                    airlineName: String
                }
            },
            price: String,
            flightNumber: Number
        }
}, {collection: 'airlines'});
export default schema;