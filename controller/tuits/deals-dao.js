import dealsmodel from "./dealsmodel.js";

export const findAlldeals = () => dealsmodel.find();
export const createDeals = (deal) => dealsmodel.create(deal);
