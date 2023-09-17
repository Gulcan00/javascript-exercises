const fibonacci = function(num) {
   if (num < 0)
    return 'OOPS';

   let first = 1;
   let next = 1;
   let f = 1;

   for (let i = 2; i < num; i++) 
    {
        f = first + next;
        first = next;
        next = f;
    }
   return f;
};

// Do not edit below this line
module.exports = fibonacci;
