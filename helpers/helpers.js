const multiplyByTen = num => {
  // if(!num || typeof num === 'string') {
  //   return 0;
  if(!num) {
    return 0;
  }
    if (typeof num === ' string') {
      throw new Error('value must be a number')
    }

    return num * 10;
    // return !!num ? num * 10 : 0;
  };
  
  const subtractFive = num => {
    return num - 5;
  };
  
  const areSameLength = (str1, str2) => {
    return str1.length === str2.length;
    // return true;
  };
  
  const areEqual = (x, y) => {
    // return x === y;
  };
  
  const someApiCall = () => {
    return new Promise(resolve => setTimeout(resolve, 2000))
  }
  
  module.exports = {
    multiplyByTen,
    subtractFive,
    areSameLength,
    areEqual ,
    someApiCall
  }