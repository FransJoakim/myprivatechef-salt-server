const db = require('./db');

const getAllChefs = async () => {
    return await db.getAllChefsFromDB()
}

module.exports = {
    getAllChefs
}