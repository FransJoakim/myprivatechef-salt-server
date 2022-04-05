const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config()
const url = `mongodb+srv://masterchef:${process.env.DB_PASSWORD}@cluster0.ubqlg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const dbName = 'myprivatechef';

const mongoConnection = client => {
    const db = client.db(dbName);
    const chefCollection = db.collection('booking');
    return chefCollection;
};

const addBookingToDB = async (data) => {
    const client = await MongoClient
        .connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        const bookingInfo = {
            ...data,
            _id: uuidv4()
        }

        const bookingCollection = mongoConnection(client);
        const result = await bookingCollection.insertOne(bookingInfo);
        console.log(result)
        return result
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
};

module.exports = {
    addBookingToDB,
}