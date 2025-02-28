const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let nesting = 0; 
    if (Array.isArray(arr)) { 
        for (let i in arr) { 
          nesting = Math.max(nesting, this.calculateDepth(arr[i])); 
        } 
        nesting++; 
    } 
    return nesting; 
  }
}

module.exports = {
  DepthCalculator
};
