const { MongoClient } = require('mongodb');

require('dotenv').config()
const url = `mongodb+srv://masterchef:${process.env.DB_PASSWORD}@cluster0.ubqlg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const dbName = 'myprivatechef';
console.log(process.env.DB_PASSWORD)
const mongoConnection = client => {
    const db = client.db(dbName);
    //db.on('close', () => { console.log('close connection'); });
    //db.on('reconnect', () => { console.log('reconnected'); });
    const chefCollection = db.collection('chefs');
    return chefCollection;
  };
  
  const createNewCart = async () => {
    const client = await MongoClient
      .connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  
    try {
      const chefCollection = mongoConnection(client);
      const result = await chefCollection.findOne({"name":"Ibere"});
      console.log(result)
      return result
    } catch (err) {
      console.log(err);
    } finally {
      client.close();
    }
  };
  
  module.exports.createNewCart = createNewCart