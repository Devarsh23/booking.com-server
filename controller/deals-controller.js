import * as dealsDao from "./tuits/deals-dao.js";

const dealsController = (app) => {
    app.post('/api/deals', createDeals);
    app.get('/api/deals',findAllDeals);
}
const findAllDeals = async (req, res) => {
    const deals = await dealsDao.findAlldeals()
    res.json(deals);
}
const createDeals = async (req, res) => {
    const newDeal = req.body;
    //newTuit._id = (new Date()).getTime()+'';
    const insertedDeal = await dealsDao.createDeals(newDeal);
    res.json(insertedDeal);
}

export default dealsController;