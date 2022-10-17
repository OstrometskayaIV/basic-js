const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let arrFromArray = arr.slice();
    for (let i = 0; i < arrFromArray.length; i++) {
        if (arrFromArray[i] == "--discard-next"){
            if (i == arrFromArray.length - 1) {
              arrFromArray.splice(i, 1);
              i -= 1;
            }
            else {
              arrFromArray.splice(i, 2);
              i += 2;
            }
        }
        else if (arrFromArray[i] == "--discard-prev") {
            if (i == 0){
              arrFromArray.splice(i, 1);
              i -= 1;
            }
        }
        else if (arrFromArray[i] == "--double-next") {
            if (i == arrFromArray.length - 1){
              arrFromArray.splice(i, 1);
            }
            else {
              arrFromArray[i] = arrFromArray[i + 1];
            }
        }
        else if (arrFromArray[i] == "--double-prev") {
            if (i == 0){
              arrFromArray.splice(i, 1);
            }
            else {
              arrFromArray[i] = arrFromArray[i - 1];
              i -= 1;
            }
        }
    } if (!Array.isArray(arrFromArray)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    } else {
      return arrFromArray;
    }
};

module.exports = {
  transform
};
