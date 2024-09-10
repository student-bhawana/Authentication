const mongoose = require("mongoose")
const db = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Task", {
            useUnifiedTopology: true,
        })
        console.log("database is connected");
    } catch (error) {
        console.log("error", error);
    }
}

module.exports = db