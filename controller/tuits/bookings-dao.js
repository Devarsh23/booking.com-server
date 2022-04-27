import bookingsModel from "./bookingmodel.js";

export const findBookings = () => bookingsModel.find();
export const createBookings = (bookings) => bookingsModel.create(bookings);