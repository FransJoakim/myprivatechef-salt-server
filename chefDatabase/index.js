const db = require('./db');

const getAllChefs = async () => {
    return await db.getAllChefsFromDB()
}

const saveBookedDateToChef = async(name, date) => {
    return await db.saveBookedDateToDB(name, date)
}

module.exports = {
    getAllChefs,
    saveBookedDateToChef
}