import * as airlinesDao from "./tuits/airlines-dao.js";

const airlinesController = (app) => {
    app.post('/api/airlines', createAirlines);
    app.get('/api/airlines', findAllAirlines);
}
const findAllAirlines = async (req, res) => {
    const airline = await airlinesDao.findAllairlines();
    res.json(airline);
}
const createAirlines = async (req, res) => {
    const newAirline = req.body;

    //newTuit._id = (new Date()).getTime()+'';
    const insertedAirline = await airlinesDao.createAirlines(newAirline);
    res.json(insertedAirline);
}

export default airlinesController;