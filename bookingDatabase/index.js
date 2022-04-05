const db = require('./db');

const postNewBooking = async (data) => {
    return await db.addBookingToDB(data)
}

module.exports = {
    postNewBooking
}