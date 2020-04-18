
module.exports = function(triangle) {
  
  const a = triangle.a, b = triangle.b, c = triangle.c

    if((a<=0) || (b<=0) || (c<=0)) return "ERROR";
    if(a == b && b == c) return "EQUILATERAL";
};