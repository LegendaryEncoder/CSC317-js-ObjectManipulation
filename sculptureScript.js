
const sculptureList = require('./data.js');  // import your array


const sculptureListLengths = {};

sculptureList.forEach((sculpture, index) => {
  sculptureListLengths[index] = {};

  Object.keys(sculpture).forEach(key => {
    sculptureListLengths[index][key] = sculpture[key].length;
  });
});

console.log(JSON.stringify(sculptureListLengths, null, 2));