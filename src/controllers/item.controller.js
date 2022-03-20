const Item = require('../models/Item.model');
const {
  nanoid
} = require('nanoid');

exports.createItem = async function (itemObj) {
  try {
    if (!itemObj || !itemObj.name || !itemObj.rating || !itemObj.price || !itemObj.hash) {
      throw new Error('Invalid arguments');
    }
    const {
      name,
      rating,
      price,
      hash
    } = itemObj;

    let item = new Item({
      name,
      rating,
      price,
      hash
    });

    return await item.save();
  } catch (err) {
    return Promise.reject(err);
  }
}

exports.updateItemHash = async function (hash) {
  try {
    if (!hash) {
      throw new Error('Incomplete arguments');
    }

    let item = await Item.findOne({
      hash
    });
    item.hash = getUniqueHash(item);

    return await item.save();
  } catch (err) {
    return Promise.reject(err);
  }
}

exports.readItem = async function (hash) {
  try {
    if (!hash) {
      throw new Error('Invalid item id');
    }

    return await Item.findOne({
      hash
    });
  } catch (err) {
    return Promise.reject(err);
  }
}


// Private function
function getUniqueHash(item) {
  if (!item) return null;
  const currentHash = item.hash;
  let newHash = nanoid(10);

  while (newHash === currentHash) {
    newHash = nanoid(10);
  }
  return newHash;
}