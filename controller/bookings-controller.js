import * as bookingsDao from "./tuits/bookings-dao.js";

const bookingsController = (app) => {
    app.get('/api/bookings', findbookings);
    app.post('/api/bookings', createbookings)
}

const findbookings = async (req, res) => {
    const booking = await bookingsDao.findBookings();
    res.json(booking);
}

const createbookings = async (req, res) => {
    const booking = await bookingsDao.createBookings(req.body);
    res.json(booking);
}

export default bookingsController;