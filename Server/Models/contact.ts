import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const ContactSchema = new Schema({
    name: String,
    number: Number,
    email: String
},
{
    collection:"contact"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model;