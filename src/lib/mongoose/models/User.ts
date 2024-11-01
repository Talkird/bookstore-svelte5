import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true, 
    },
    username: {
        type: String,
        required: true, 
        trim: true,
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true, 
    },
    role: {
        type: String,
        enum: ["user", "admin"], 
        default: "user",
    },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
