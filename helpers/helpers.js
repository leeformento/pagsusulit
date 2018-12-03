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
    if (!str1 || !str2 || typeof str1 !=='string' || typeof str2 !== 'string') {
      return null;
    }
     return str1.length === str2.length;
    // return true;
  };
  
  const areEqual = (x, y) => {
    if(!x || !y) {
      return null;
    }
    return JSON.stringify(x) === JSON.stringify(y);
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