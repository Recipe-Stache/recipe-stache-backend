const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
    
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(e) {
        console.error(`Error connecting to MongoDB: ${e.message}`);
    }
};

module.exports = connectMongo;
