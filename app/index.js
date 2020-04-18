
module.exports = function(triangle) {
  
  const a = triangle.a, b = triangle.b, c = triangle.c

  // check if there integers
  if(!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) 
    return "NOT INTEGER";
  // one of them is a 0
  if((a<=0) || (b<=0) || (c<=0)) return "ERROR";
  // Equilateral
  if(a === b && b === c) return "EQUILATERAL";
  
};