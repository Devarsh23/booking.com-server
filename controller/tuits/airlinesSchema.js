import mongoose from 'mongoose';
const schema = mongoose.Schema({
    legs:
        {
            origin: {
                name: String,
                displayCode: String
            },
            destination: {
                name: String,
                displayCode: String
            },
            durationInMinutes: String,
            stopCount: Number,
            departure: String,
            arrival: String,
            carriers: {
                marketing: {
                    name: String
                }
            }
        }

}, {collection: 'airlines'});
export default schema;