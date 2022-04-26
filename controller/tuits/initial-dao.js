import initialmodel from "./initialmodel.js";
export const findValues = () => initialmodel.find();
export const createValues = (data) => initialmodel.create(data);
export const deleteValues = () => initialmodel.remove({});
export const updateInitialValue = (initialIdToUpdate, updatedInitial) => initialmodel.updateOne({_id: initialIdToUpdate}, {$set: updatedInitial})
