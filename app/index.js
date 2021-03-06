
module.exports = function(triangle) {
  
  const a = triangle.a, b = triangle.b, c = triangle.c

  // check if they are integers
  if(typeof a === 'string' || typeof b === 'string' || typeof c === 'string')
    return "NOT INTEGER";
  
  //Check if it's valid triangle
  if(a+b<=c || a+c<=b || c+b<=a) return "Incorrect";

  // Equilateral
  if(a === b && b === c) return "Equilateral";

  // Isosceles
  if((a==b) || (a==c) || (b==c)) return "Isosceles";

  return "Scalene";
};
