import * as initialDao from "./tuits/initial-dao.js";

const initialController = (app) => {
    app.post('/api/initial', createInitialValues);
    app.get('/api/initial', findInitialValues);
    app.put('/api/initial/:tid',updater)
}
const findInitialValues = async (req, res) => {
    const value = await initialDao.findValues();
    res.json(value);
}
const createInitialValues = async (req, res) => {
    const newAirline = req.body;
    //newTuit._id = (new Date()).getTime()+'';

    const insertedAirline = await airlinesDao.createAirlines(newAirline);
    res.json(insertedAirline);
}

const updater = async (req, res) => {
    const initialIdToUpdate = req.params.tid;
    const updatedInitial = req.body;
    const status = await initialDao.updateInitialValue(initialIdToUpdate, updatedInitial);
    //tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    // console.log("status --> ",   status);
    if (status["acknowledged"]) {
        // console.log("status 1--> ",status);
        // if (status["deletedCount"] === 1) {
        //     res.sendStatus(200);
        // }
        res.sendStatus(200);
    } else {
        res.sendStatus(500) ;
    }
    //res.sendStatus(status);
}

export default initialController;