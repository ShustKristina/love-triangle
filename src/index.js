/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
        var countTriangle=0;
    for(var i=0; i<preferences.length; i++){
      var number1=preferences[i];
      var number2=preferences[number1-1];
      var number3=preferences[number2-1];
      if ((i+1) == number3 && (i+1) != number2){
        countTriangle++;
          preferences[i]=0;
          preferences[number1-1]=0;
          preferences[number2-1]=0;
      }
    }
    return countTriangle;
  };
