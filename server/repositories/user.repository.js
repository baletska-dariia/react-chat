let userData = require("./user-data");
const userDetailsMap = new Map();
let autogeneratedId = 1;

userData.map(user => userDetailsMap.set(autogeneratedId++, user));

const saveData = data => {
  // saving users data into Map
  //user's id is autoincremented value
  if (data) {
    userDetailsMap.set(autogeneratedId++, data);
    return true;
  } else {
    return false;
  }
};

const getAllData = () => {
  const result = [];

  [...userDetailsMap.keys()].forEach(e => {
    result.push(userDetailsMap.get(e));
  });

  return result;
};

const getDataById = id => {
  //convert id into Number
  const convertedId = Number(id);
  result = userDetailsMap.get(convertedId);

  if (result) {
    return result;
  } else {
    return null;
  }
};

const deleteDataById = id => {
  const convertedId = Number(id);
  result = userDetailsMap.delete(convertedId);

  if (result) {
    return true;
  } else {
    return false;
  }
};

const updateDataById = (id, data) => {
  const convertedId = Number(id);
  const result = userDetailsMap.set(convertedId, data);

  if (result) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  saveData,
  getAllData,
  getDataById,
  deleteDataById,
  updateDataById
};
