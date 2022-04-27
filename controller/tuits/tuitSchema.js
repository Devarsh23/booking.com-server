import mongoose from 'mongoose';
const schema = mongoose.Schema({
    firstname : String,
    lastname : String,
    isAdmin : Boolean,
    isAirline : Boolean,
    isUser : Boolean,
    password : String,
    email:String,
    dateOfBirth: String,
    dateJoined: String,
    location: String
}, {collection: 'uservalues'});
export default schema;