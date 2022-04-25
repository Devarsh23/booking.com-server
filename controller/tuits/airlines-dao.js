import airlinemodels from "./airlinesmodel.js";

export const findAllairlines = () => airlinemodels.find();
export const createAirlines = (airline) => airlinemodels.create(airline);
