import * as discountDao from "./tuits/discount-dao.js";

const discountController = (app) => {
    app.post('/api/discount', createDiscountValues);
    app.get('/api/discount', findDiscountValues);
    app.put('/api/discount/:tid',updater)
}
const findDiscountValues = async (req, res) => {
    const value = await discountDao.findDiscount();
    res.json(value);
}
const createDiscountValues = async (req, res) => {
    const newDiscount = req.body;
    //newTuit._id = (new Date()).getTime()+'';

    const insertedDiscount = await discountDao.createDiscount(newDiscount);
    res.json(insertedDiscount);
}

const updater = async (req, res) => {
    const initialIdToUpdate = req.params.tid;
    const updatedInitial = req.body;
    const status = await discountDao.updateDiscount(initialIdToUpdate, updatedInitial);
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

export default discountController;