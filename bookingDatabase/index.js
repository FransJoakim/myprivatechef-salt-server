const db = require('./db');

const postNewBooking = async (data) => {
    return await db.addBookingToDB(data)
}

const getUserBookings = async (user) => {
    return await db.getAllBookingsForUser(user)
}

module.exports = {
    postNewBooking,
    getUserBookings
}