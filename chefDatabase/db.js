const { MongoClient } = require('mongodb');

require('dotenv').config()
const url = `mongodb+srv://masterchef:${process.env.DB_PASSWORD}@cluster0.ubqlg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const dbName = 'myprivatechef';

const mongoConnection = client => {
  const db = client.db(dbName);
  const chefCollection = db.collection('chefs');
  return chefCollection;
};

const getAllChefsFromDB = async () => {
  const client = await MongoClient
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    const chefCollection = mongoConnection(client);
    const result = await chefCollection.find().toArray();
    return result
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
};

const saveBookedDateToDB = async (name, date) => {
  const client = await MongoClient
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    const chefCollection = mongoConnection(client);
    const result = await chefCollection.updateOne(
      {name:name},
      {$push: {bookedDates: date}}
    );
    console.log(result)
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
};

module.exports = {
  getAllChefsFromDB,
  saveBookedDateToDB
}
