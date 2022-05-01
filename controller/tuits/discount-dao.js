import discountmodel from "./discountmodel.js";
export const findDiscount = () => discountmodel.find();
export const createDiscount = (data) => discountmodel.create(data);
export const deleteDiscount = () => discountmodel.remove({});
export const updateDiscount = (initialIdToUpdate, updatedInitial) => discountmodel.updateOne({_id: initialIdToUpdate}, {$set: updatedInitial})
