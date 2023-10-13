import mongoose from "mongoose";

// se coloca new cuando es una instancia
const userSchema = new  mongoose.Schema({
    username:{type: String, required: true,trim: true, },
    email:{type: String,required: true, unique: true},
    password:{type: String, required: true}
},{
    timestamps: true
});

export default mongoose.model('User', userSchema);
